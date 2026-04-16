import {
  type WorkflowType,
  type WorkflowInput,
  type RunWorkflowResponse,
  type GetDecisionsResponse,
  type PendingReviewItem,
  type SubmitHumanReviewRequest,
  type SubmitHumanReviewResponse,
  type DecisionLog
} from '@finguard/shared'

import {
  mockLoanApproved,
  mockLoanEscalated,
  mockFraudEscalated,
  mockDecisionLogs,
  mockPendingReviews
} from './mock-data'

// Helper to simulate network latency
const delay = (ms: number = 1500) => new Promise((resolve) => setTimeout(resolve, ms))

export async function runWorkflow(
  workflowType: WorkflowType,
  input: WorkflowInput
): Promise<RunWorkflowResponse> {
  await delay()

  // Return specific mock responses based on workflow_type to demonstrate different flows
  let result;

  if (workflowType === 'loan') {
    // Arbitrary switch based on input keys/values to show different outcomes
    if ('cibil_score' in input && (input as any).cibil_score < 600) {
      // In real scenario this would be handled differently, we'll just mock it
      result = mockLoanEscalated
    } else {
      result = mockLoanApproved
    }
  } else if (workflowType === 'fraud') {
    result = mockFraudEscalated
  } else {
    // Default fallback
    result = mockLoanApproved 
  }

  const decision_id = `dec-${Math.random().toString(36).substr(2, 9)}`

  return { decision_id, result }
}

export async function getDecisions(
  workflowType?: WorkflowType,
  verdict?: string
): Promise<GetDecisionsResponse> {
  await delay()
  
  let filteredLogs = mockDecisionLogs;
  
  if (workflowType && workflowType !== 'all') {
    filteredLogs = filteredLogs.filter(log => log.workflow_type === workflowType)
  }
  
  if (verdict && verdict !== 'all') {
    filteredLogs = filteredLogs.filter(log => log.final_status === verdict)
  }

  return {
    decisions: filteredLogs,
    total: filteredLogs.length
  }
}

export async function getPendingReviews(): Promise<PendingReviewItem[]> {
  await delay()
  return mockPendingReviews
}

export async function submitHumanReview(
  req: SubmitHumanReviewRequest
): Promise<SubmitHumanReviewResponse> {
  await delay()
  
  // Just simulate success
  return {
    decision_id: req.decision_id,
    updated_status: req.human_verdict === 'approve' ? 'approved' : 'rejected'
  }
}

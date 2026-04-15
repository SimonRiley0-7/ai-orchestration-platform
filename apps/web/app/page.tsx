import { ConfidenceDeltaMeter } from '@/components/engine/confidence-delta-meter'
import { AdvocatePanel } from '@/components/engine/advocate-panel'
import { ChallengerPanel } from '@/components/engine/challenger-panel'
import { ArbitratorPanel } from '@/components/engine/arbitrator-panel'
import { mockLoanApproved, mockLoanEscalated } from '@/lib/mock-data'

export default function VerificationPage() {
  return (
    <main className="min-h-screen bg-finguard-black text-finguard-slate p-8">
      <div className="max-w-5xl mx-auto space-y-12">
        <header className="border-b border-border-finguard pb-6">
          <h1 className="font-display text-2xl text-white font-bold tracking-widest uppercase">
            FinGuard — AI-Orchestrated Financial Decision System
          </h1>
          <p className="text-sm mt-2">Core Engine Components Verification</p>
        </header>

        {/* Test Scenario 1: Consensus Reached */}
        <section className="space-y-4">
          <h2 className="font-display text-xl text-white uppercase border-l-4 border-finguard-blue pl-3 py-1">
            Scenario 1: Consensus Reached
          </h2>
          
          <div className="finguard-card p-6 flex flex-col gap-8">
            <ConfidenceDeltaMeter
              advocate_score={mockLoanApproved.confidence_delta!.advocate_score}
              challenger_score={mockLoanApproved.confidence_delta!.challenger_score}
              delta={mockLoanApproved.confidence_delta!.delta}
              should_escalate={mockLoanApproved.confidence_delta!.should_escalate}
            />

            <div className="grid grid-cols-2 gap-4">
              <AdvocatePanel output={mockLoanApproved.advocate!} />
              <ChallengerPanel output={mockLoanApproved.challenger!} />
            </div>

            <ArbitratorPanel
              output={mockLoanApproved.arbitrator}
              reasoning={mockLoanApproved.arbitrator_reasoning}
              is_escalated={mockLoanApproved.hitl_required}
              escalation_reason={mockLoanApproved.escalation_reason}
              delta={mockLoanApproved.confidence_delta!.delta}
            />
          </div>
        </section>

        {/* Test Scenario 2: Escalated to Human Review */}
        <section className="space-y-4">
          <h2 className="font-display text-xl text-white uppercase border-l-4 border-finguard-amber pl-3 py-1">
            Scenario 2: Escalation to Human
          </h2>
          
          <div className="finguard-card p-6 flex flex-col gap-8">
            <ConfidenceDeltaMeter
              advocate_score={mockLoanEscalated.confidence_delta!.advocate_score}
              challenger_score={mockLoanEscalated.confidence_delta!.challenger_score}
              delta={mockLoanEscalated.confidence_delta!.delta}
              should_escalate={mockLoanEscalated.confidence_delta!.should_escalate}
            />

            <div className="grid grid-cols-2 gap-4">
              <AdvocatePanel output={mockLoanEscalated.advocate!} compact />
              <ChallengerPanel output={mockLoanEscalated.challenger!} compact />
            </div>

            <ArbitratorPanel
              output={mockLoanEscalated.arbitrator}
              reasoning={mockLoanEscalated.arbitrator_reasoning}
              is_escalated={mockLoanEscalated.hitl_required}
              escalation_reason={mockLoanEscalated.escalation_reason}
              delta={mockLoanEscalated.confidence_delta!.delta}
            />
          </div>
        </section>
      </div>
    </main>
  )
}

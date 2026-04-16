import React from 'react'
import Link from 'next/link'
import { AlertCircle, FileText, Activity, TrendingUp, ArrowRight } from 'lucide-react'

const workflows = [
  {
    id: 'fraud',
    title: 'Fraud Detection Detection',
    description: 'Analyze transactions for anomalous patterns, high-value foreign flags, and sudden spikes compared to historical averages.',
    icon: AlertCircle,
    color: 'text-finguard-red',
    bg: 'bg-finguard-red/10',
    border: 'border-finguard-red/20',
  },
  {
    id: 'loan',
    title: 'Origination & Underwriting',
    description: 'Evaluate loan applications combining hard rules (CIBIL > 600) and adversarial analysis of financials vs risk factors.',
    icon: FileText,
    color: 'text-finguard-green',
    bg: 'bg-finguard-green/10',
    border: 'border-finguard-green/20',
  },
  {
    id: 'transaction',
    title: 'Transaction Monitoring',
    description: 'Real-time clearing analysis. Enforces KYC verification, mandatory review thresholds, and cross-border risk checks.',
    icon: Activity,
    color: 'text-finguard-blue',
    bg: 'bg-finguard-blue/10',
    border: 'border-finguard-blue/20',
  },
  {
    id: 'investment',
    title: 'Investment Risk Assessment',
    description: 'Stress-test portfolios against volatility indices, ensuring adherence to the client\'s risk profile (crypto/equity ratios).',
    icon: TrendingUp,
    color: 'text-finguard-amber',
    bg: 'bg-finguard-amber/10',
    border: 'border-finguard-amber/20',
  }
]

export default function WorkflowsHubPage() {
  return (
    <div className="flex flex-col gap-6 max-w-5xl mx-auto">
      <div>
        <h1 className="text-2xl font-syne font-bold text-foreground mb-2">Available Workflows</h1>
        <p className="text-muted-foreground font-inter">
          Select an adversarial workflow to initialize. Each workflow runs the Advocate and Challenger agents via the consensus engine.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-6 mt-4">
        {workflows.map((wf) => (
          <div key={wf.id} className="bg-card border border-border hover:border-primary/50 transition-colors rounded-sm flex flex-col items-start p-6 relative group overflow-hidden">
            {/* Background Glow */}
            <div className={`absolute top-0 right-0 w-32 h-32 blur-3xl rounded-full ${wf.bg} -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />
            
            <div className={`w-12 h-12 rounded ${wf.bg} ${wf.border} border flex items-center justify-center mb-6`}>
              <wf.icon className={`w-6 h-6 ${wf.color}`} />
            </div>

            <h3 className="text-xl font-syne font-semibold text-foreground mb-3">{wf.title}</h3>
            <p className="text-sm font-inter text-muted-foreground flex-1 mb-8 leading-relaxed">
              {wf.description}
            </p>

            <Link 
              href={`/workflows/${wf.id}`}
              className="mt-auto w-full group/btn relative overflow-hidden bg-background border border-border hover:border-primary py-3 px-4 rounded flex items-center justify-between transition-all"
            >
              <span className="font-syne font-medium text-foreground tracking-wide text-sm relative z-10">RUN WORKFLOW</span>
              <ArrowRight className="w-4 h-4 text-muted-foreground group-hover/btn:text-primary transition-colors relative z-10 group-hover/btn:translate-x-1" />
              <div className="absolute inset-0 bg-primary/5 translate-y-full group-hover/btn:translate-y-0 transition-transform z-0" />
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

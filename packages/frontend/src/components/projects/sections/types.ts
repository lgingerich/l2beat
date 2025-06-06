import type { ActivitySectionProps } from './activity-section'
import type { ContractsSectionProps } from './contracts/contracts-section'
import type { CostsSectionProps } from './costs/costs-section'
import type { DaRiskSummarySectionProps } from './da-risk-summary-section'
import type { DetailedDescriptionSectionProps } from './detailed-description-section'
import type { GrissiniRiskAnalysisSectionProps } from './grissini-risk-analysis-section'
import type { GroupSectionProps } from './group-section'
import type { L3RiskAnalysisSectionProps } from './l3-risk-analysis-section'
import type { LivenessSectionProps } from './liveness-section'
import type { MarkdownSectionProps } from './markdown-section'
import type { MilestonesAndIncidentsSectionProps } from './milestones-and-incidents-section'
import type { PermissionsSectionProps } from './permissions/permissions-section'
import type { ExtendedProjectSectionProps } from './project-section'
import type { RiskAnalysisSectionProps } from './risk-analysis-section'
import type { RiskSummarySectionProps } from './risk-summary-section'
import type { SequencingSectionProps } from './sequencing-section'
import type { StackedTvsSectionProps } from './stacked-tvs-section'
import type { StageSectionProps } from './stage-section'
import type { StateDerivationSectionProps } from './state-derivation-section'
import type { StateValidationSectionProps } from './state-validation-section'
import type { TechnologyChoicesSectionProps } from './technology-choices-section'
import type { ThroughputSectionProps } from './throughput/throughput-section'
import type { TvsSectionProps } from './tvs-section'

type SectionId =
  | 'tvs'
  | 'activity'
  | 'onchain-costs'
  | 'liveness'
  | 'detailed-description'
  | 'milestones-and-incidents'
  | 'risk-summary'
  | 'risk-analysis'
  | 'l3-risk-analysis'
  | 'stage'
  | 'technology'
  | 'operator'
  | 'withdrawals'
  | 'other-considerations'
  | 'state-derivation'
  | 'state-validation'
  | 'upgrades-and-governance'
  | 'permissions'
  | 'contracts'
  | 'sequencing'
  | 'throughput'

type GroupId = 'da-layer' | 'da-bridge'

export type ProjectSectionId = SectionId | GroupId | `${GroupId}-${SectionId}`

export type ProjectSectionProps = Omit<
  ExtendedProjectSectionProps,
  'className' | 'children'
>

type ProjectDetailsProps<T> = Omit<T, 'sectionOrder'>

interface ProjectDetailsCostsSection {
  type: 'CostsSection'
  props: ProjectDetailsProps<CostsSectionProps>
}

interface ProjectDetailsLivenessSection {
  type: 'LivenessSection'
  props: ProjectDetailsProps<LivenessSectionProps>
}

interface ProjectDetailsThroughputSection {
  type: 'ThroughputSection'
  props: ProjectDetailsProps<ThroughputSectionProps>
}

interface ProjectDetailsStackedTvsSection {
  type: 'StackedTvsSection'
  props: ProjectDetailsProps<StackedTvsSectionProps>
}

interface ProjectDetailsTvsSection {
  type: 'TvsSection'
  props: ProjectDetailsProps<TvsSectionProps>
}

interface ProjectDetailsActivitySection {
  type: 'ActivitySection'
  props: ProjectDetailsProps<ActivitySectionProps>
}

interface ProjectDetailsDetailedDescriptionSection {
  type: 'DetailedDescriptionSection'
  props: ProjectDetailsProps<DetailedDescriptionSectionProps>
}

interface ProjectDetailsMilestonesAndIncidentsSection {
  type: 'MilestonesAndIncidentsSection'
  props: ProjectDetailsProps<MilestonesAndIncidentsSectionProps>
}

interface ProjectDetailsRiskSummarySection {
  type: 'RiskSummarySection'
  props: ProjectDetailsProps<RiskSummarySectionProps>
}

interface ProjectDetailsDaRiskSummarySection {
  type: 'DaRiskSummarySection'
  props: ProjectDetailsProps<DaRiskSummarySectionProps>
}

interface ProjectDetailsRiskAnalysisSection {
  type: 'RiskAnalysisSection'
  props: ProjectDetailsProps<RiskAnalysisSectionProps>
}

interface L3ProjectDetailsRiskAnalysisSection {
  type: 'L3RiskAnalysisSection'
  props: ProjectDetailsProps<L3RiskAnalysisSectionProps>
}

interface ProjectDetailsStageSection {
  type: 'StageSection'
  props: ProjectDetailsProps<StageSectionProps>
}

interface ProjectDetailsTechnologyChoicesSection {
  type: 'TechnologyChoicesSection'
  props: ProjectDetailsProps<TechnologyChoicesSectionProps>
}

interface ProjectDetailsStateDerivationSection {
  type: 'StateDerivationSection'
  props: ProjectDetailsProps<StateDerivationSectionProps>
}

interface ProjectDetailsStateValidationSection {
  type: 'StateValidationSection'
  props: ProjectDetailsProps<StateValidationSectionProps>
}

interface ProjectDetailsMarkdownSection {
  type: 'MarkdownSection'
  props: ProjectDetailsProps<MarkdownSectionProps>
}

interface ProjectDetailsSequencingSection {
  type: 'SequencingSection'
  props: ProjectDetailsProps<SequencingSectionProps>
}

interface ProjectDetailsPermissionsSection {
  type: 'PermissionsSection'
  props: ProjectDetailsProps<PermissionsSectionProps>
}

interface ProjectDetailsContractsSection {
  type: 'ContractsSection'
  props: ProjectDetailsProps<ContractsSectionProps>
}

interface ProjectDetailsUpcomingDisclaimer {
  type: 'UpcomingDisclaimer'
  excludeFromNavigation: true
}

interface ProjectDetailsGroup {
  type: 'Group'
  props: ProjectDetailsProps<GroupSectionProps>
}

interface ProjectDetailsGrissiniRiskAnalysisSection {
  type: 'GrissiniRiskAnalysisSection'
  props: ProjectDetailsProps<GrissiniRiskAnalysisSectionProps>
}

export type ProjectDetailsSection = {
  excludeFromNavigation?: boolean
  sideNavTitle?: string
} & (
  | ProjectDetailsCostsSection
  | ProjectDetailsLivenessSection
  | ProjectDetailsDetailedDescriptionSection
  | ProjectDetailsMilestonesAndIncidentsSection
  | ProjectDetailsRiskSummarySection
  | ProjectDetailsDaRiskSummarySection
  | ProjectDetailsRiskAnalysisSection
  | L3ProjectDetailsRiskAnalysisSection
  | ProjectDetailsStageSection
  | ProjectDetailsTechnologyChoicesSection
  | ProjectDetailsStateDerivationSection
  | ProjectDetailsStateValidationSection
  | ProjectDetailsMarkdownSection
  | ProjectDetailsSequencingSection
  | ProjectDetailsPermissionsSection
  | ProjectDetailsContractsSection
  | ProjectDetailsUpcomingDisclaimer
  | ProjectDetailsGroup
  | ProjectDetailsGrissiniRiskAnalysisSection
  | ProjectDetailsThroughputSection
  | ProjectDetailsStackedTvsSection
  | ProjectDetailsTvsSection
  | ProjectDetailsActivitySection
)

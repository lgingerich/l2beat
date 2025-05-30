import type { ReferenceLink } from '@l2beat/config'
import { DiagramImage } from '~/components/diagram-image'
import type { DiagramParams } from '~/utils/project/get-diagram-params'
import { Markdown } from '../../markdown/markdown'
import { ProjectSection } from './project-section'
import { ReferenceList } from './reference-list'
import type { TechnologyRisk } from './risk-list'
import { RiskList } from './risk-list'
import type { ProjectSectionProps } from './types'

export interface SequencingSectionProps extends ProjectSectionProps {
  name: string
  diagram?: DiagramParams
  content: string
  mdClassName?: string
  risks?: TechnologyRisk[]
  references?: ReferenceLink[]
}

export function SequencingSection({
  name,
  diagram,
  content,
  mdClassName,
  risks,
  references,
  ...projectSectionProps
}: SequencingSectionProps) {
  return (
    <ProjectSection {...projectSectionProps}>
      {diagram ? (
        <figure className="mb-8 mt-4 text-center">
          <DiagramImage diagram={diagram} />
          <figcaption className="text-xs text-secondary">
            {diagram.caption}
          </figcaption>
        </figure>
      ) : null}
      <h3 id={name} className="mb-2 text-lg font-bold md:text-xl">
        <a href={`#${name}`}>{name}</a>
      </h3>
      <Markdown className={mdClassName}>{content}</Markdown>
      {risks && risks?.length > 0 && <RiskList risks={risks} />}
      {references && references?.length > 0 && (
        <ReferenceList references={references} />
      )}
    </ProjectSection>
  )
}

import { DiscoUiBanner } from '../../disco-ui-banner'
import type { TechnologyContract } from '../contract-entry'
import { ContractEntry, technologyContractKey } from '../contract-entry'
import { PermissionedEntityEntry } from '../permissioned-entity-entry'
import { ProjectSection } from '../project-section'
import type { ProjectSectionProps } from '../types'

export interface PermissionsSectionProps extends ProjectSectionProps {
  permissionsByChain: Record<
    string,
    { roles: TechnologyContract[]; actors: TechnologyContract[] }
  >
  permissionedEntities?: { name: string; href: string; key?: string }[]
  discoUiHref?: string
}

export function PermissionsSection({
  permissionsByChain,
  permissionedEntities,
  discoUiHref,
  ...sectionProps
}: PermissionsSectionProps) {
  return (
    <ProjectSection {...sectionProps}>
      {discoUiHref && <DiscoUiBanner href={discoUiHref} />}
      {permissionedEntities && permissionedEntities.length > 0 && (
        <h3 className="mt-4 font-bold">
          The DA committee has the following members:
        </h3>
      )}
      {permissionedEntities?.map((entity, i) => (
        <PermissionedEntityEntry key={i} entity={entity} className="my-2" />
      ))}
      <div>
        {Object.entries(permissionsByChain).map(([chain, permissions]) => {
          return (
            <div key={chain} className="mt-8">
              <div className="flex items-baseline gap-3">
                <h3 className="whitespace-pre text-2xl font-bold">{chain}</h3>
                <div className="w-full border-b-2 border-divider" />
              </div>
              {permissions.roles.length > 0 && (
                <div className="mt-3">
                  <h4 className="text-xl font-bold">Roles:</h4>
                  {permissions.roles.map((permission) => (
                    <ContractEntry
                      key={technologyContractKey(permission)}
                      contract={permission}
                      className="my-4"
                    />
                  ))}
                </div>
              )}
              {permissions.actors.length > 0 && (
                <div className="mt-3">
                  <h4 className="text-xl font-bold">Actors:</h4>
                  {permissions.actors.map((permission) => (
                    <ContractEntry
                      key={technologyContractKey(permission)}
                      contract={permission}
                      className="my-4"
                    />
                  ))}
                </div>
              )}
            </div>
          )
        })}
      </div>
    </ProjectSection>
  )
}

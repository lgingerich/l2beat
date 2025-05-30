import { ConfigReader, getDiscoveryPaths } from '@l2beat/discovery'
import { expect } from 'earl'

describe('Verify Discovery config files', () => {
  const paths = getDiscoveryPaths()
  const configReader = new ConfigReader(paths.discovery)
  const chains = configReader.readAllChains()

  for (const chain of chains) {
    describe(`${ConfigReader.name} for ${chain}`, () => {
      const projects = configReader.readAllProjectsForChain(chain)

      describe(ConfigReader.prototype.readConfig.name, () => {
        for (const project of projects) {
          it(`can read ${project} config`, () => {
            const result = configReader.readConfig(project, chain)
            expect(result.name).toEqual(project)
          })
        }
      })

      describe(ConfigReader.prototype.readAllConfigsForChain.name, () => {
        it(`can read all configs for ${chain}`, () => {
          const configReader = new ConfigReader(paths.discovery)

          const result = configReader.readAllConfigsForChain(chain)

          const readConfigs: string[] = []
          for (const project of projects) {
            const i = result.find((r) => r.name === project)
            if (i) {
              readConfigs.push(project)
            }
          }

          expect(projects).toEqual(readConfigs)
        }).timeout(5000)
        // TODO(radomski): We're running into the timeout wall over and over
        // again in CI. There is a solution to this problem for sure. We just
        // need to spend time and figure it out.
      })

      describe(ConfigReader.prototype.readDiscovery.name, () => {
        for (const project of projects) {
          it(`can read discovered.json for ${project}`, () => {
            const result = configReader.readDiscovery(project, chain)
            expect(result.name).toEqual(project)
          })
        }
      })

      describe('ChainId in config.jsonc matches the ChainId of the folder', () => {
        for (const project of projects) {
          it(`${project}`, () => {
            const config = configReader.readConfig(project, chain)
            expect(config.chain).toEqual(chain)
          })
        }
      })

      describe('ChainId in discovered.json matches the ChainId of the folder', () => {
        for (const project of projects) {
          it(`${project}`, () => {
            const discovered = configReader.readDiscovery(project, chain)
            expect(discovered.chain).toEqual(chain)
          })
        }
      })
    })
  }
})

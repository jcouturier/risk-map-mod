import { Layout, Row, Column } from '@carbonplan/components'
import { Box } from 'theme-ui'
import { Figure } from '@carbonplan/components'
import RiskMaps from './components/risk-maps'

const Index = () => {
  return (
    <Layout>
      <Row sx={{fontSize: [4, 5, 6, 7], my: [0]}}>
        <Column start={[1, 2, 2, 2]} width={[6]}>
          Forest Risk Map
        </Column>
      </Row>
      <Row>
        <Column start={[1, 2, 2, 2]} width={[6]}>
          Figure 1 - Modified
        </Column>
      </Row>
      <Row sx={{my: [5, 6, 7, 8]}}>
        <Column start={[1, 2, 2, 2]} width={[6]}>
          <RiskMaps />
        </Column>
      </Row>
    </Layout>
  )
}

export default Index

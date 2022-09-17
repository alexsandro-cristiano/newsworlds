import { CardNews } from 'components/CardNews';
import { GridLayoutThreeColumns } from 'layouts/Girds/GridThreeColumns/styles';
import { BoxNews, GridContainer } from './styles';

export function Home() {
  return (
    <GridContainer>
      <GridLayoutThreeColumns>
        <CardNews />
        <CardNews />
        <CardNews />
      </GridLayoutThreeColumns>
      <BoxNews>
        <div>
          <p>Previsão do Tempo</p>
        </div>
        <div>
          <p>Github News</p>
        </div>
      </BoxNews>
    </GridContainer>
  );
}

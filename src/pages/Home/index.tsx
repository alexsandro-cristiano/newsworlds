import { CardNews } from 'components/CardNews';
import { GithubNews } from 'components/GithubNews';
import { GridLayoutThreeColumns } from 'layouts/Girds/GridThreeColumns/styles';
import { BoxNews, GridContainer } from './styles';

export function Home() {
  return (
    <GridContainer>
      <GridLayoutThreeColumns>
        <CardNews />
        <CardNews /> <CardNews />
        <CardNews />
        <CardNews /> <CardNews />
        <CardNews />
        <CardNews />
      </GridLayoutThreeColumns>
      <BoxNews>
        <div>
          <p>Previsão do Tempo</p>
        </div>
        <div className="">
          <h2>Leia Também</h2>
          <GithubNews user="RafaelVargas29" />
          <GithubNews user="alexsandro-cristiano" />
        </div>
      </BoxNews>
    </GridContainer>
  );
}

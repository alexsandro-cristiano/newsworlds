import { CardNews } from 'components/CardNews';
import { GridLayoutFiveColumns } from 'layouts/Girds/GridFiveColumns/styles';
import { INews } from 'types/INews';
import { ContainerNews } from './styles';

export function News({ title }: INews) {
  return (
    <ContainerNews>
      <article>{title}</article>
      <GridLayoutFiveColumns>
        <CardNews />
        <CardNews />
        <CardNews />
        <CardNews />
        <CardNews />
      </GridLayoutFiveColumns>
    </ContainerNews>
  );
}

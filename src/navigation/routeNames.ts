export type RoutesProps<Param> = {
  key: string;
  name: string;
  route: {params: Param};
};

export type RoutesType = {
  series: SeriesRoutes;
};

export type SeriesRoutes = {
  displaySeries: 'Series';
  displayDetails: 'Details';
};

const routes: RoutesType = {
  series: {
    displaySeries: 'Series',
    displayDetails: 'Details',
  },
};

export default routes;

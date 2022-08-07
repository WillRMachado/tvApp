import {StackNavigationPropType, CommonActions, useNavigation} from '~modules';

type RoutesGenericType = {
  [key: string]: Record<string, string>;
};

function useNavigationTyped(): StackNavigationPropType<
  RoutesGenericType,
  string | number,
  undefined
> {
  return useNavigation<StackNavigationPropType<RoutesGenericType>>();
}

function resetRoutToTop(routeName: string) {
  return CommonActions.reset({
    index: 0,
    routes: [{name: routeName}],
  });
}

function navigate(name: string, params?: Record<string, any>) {
  return CommonActions.navigate({
    name,
    params,
  });
}

export type RouteWithParams<Params> = {route: {params: Params}};

export {useNavigationTyped as useNavigation, resetRoutToTop, navigate};

import {ScrollView} from 'react-native';
import {PropsWithChildren} from 'react';
import React from 'react';
import SceneWrapper, {Props} from './SceneWrapper';

const SceneWrapperScrolled: React.FC<PropsWithChildren<Props>> = ({
  children,
  isLoading,
  ...params
}) => {
  return (
    <>
      {isLoading ? (
        <SceneWrapper isLoading={isLoading} {...params}>
          {children}
        </SceneWrapper>
      ) : (
        <ScrollView>
          <SceneWrapper {...params}>{children}</SceneWrapper>
        </ScrollView>
      )}
    </>
  );
};

export default SceneWrapperScrolled;

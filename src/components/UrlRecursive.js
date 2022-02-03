import React from 'react';

const recursiveCloneChildren = (children, data) => {
  return React.Children.map(children, (child) => {
    let childProps = {
      urlApi: data.urlApi,
      setting: data.setting,
    };
    if (!child || !child.props) {
      return child;
    }
    childProps = {
      ...child.props,
      urlApi: data.urlApi,
      setting: data.setting,
    };
    childProps.DECORATED = true;
    const children = recursiveCloneChildren(child.props.children, data);
    return React.cloneElement(child, childProps, children);
  });
};
export default function({children, data}) {
  const comp = recursiveCloneChildren(children, data);
  return (
    comp
  );
}

import React from 'react';

const RecursiveCloneChildren = (children, data) => {
  return React.Children.map(children, (child) => {
    let childProps = {
      url_api: data.url_api,
      setting: data.setting,
    };
    if (!child || !child.props) {
      return child;
    }
    childProps = {
      ...child.props,
      url_api: data.url_api,
      setting: data.setting,
      // decorated: true, // TODO: better way to do this?
    };
    const children = RecursiveCloneChildren(child.props.children, data);
    return React.cloneElement(child, childProps, children);
  });
};
export default function ({ children, data }) {
  const comp = RecursiveCloneChildren(children, data);
  return (
    comp
  );
}

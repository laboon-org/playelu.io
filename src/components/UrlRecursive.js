import React from 'react';

// Đây là phương thức để quăng image list và setting vào dưới dạng props của từng child trong một component
// Bằng cách sử dụng đệ quy đi tới từng child
//  rồi dùng React.cloneElement để thay thế child cũ bằng một bản sao mới
//  có thêm image list và setting dưới dạng props

const RecursiveCloneChildren = (children, data) => {
  return React.Children.map(children, (child) => {
    let childProps = {
      url_api: data.url_api,
      setting: data.setting,
    };
    // Nếu child không tồn tại hoặc không có props (không phải child cần thiết)
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

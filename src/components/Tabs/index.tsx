import RcTabs, { TabsProps } from 'rc-tabs';
import React, { FC } from 'react';
import './index.less';
type TabsPropType = TabsProps;
const Tabs: FC<TabsPropType> = (props) => {
  return <RcTabs {...props} />;
};

export default Tabs;

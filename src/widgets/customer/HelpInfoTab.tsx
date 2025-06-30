import React from 'react';

import CommonHeader from '@/entities/customer/CommonHeader';
import { TabsContent } from '@/shared/ui/tabs';

import HelpInfoList from '../../features/customer/HelpInfoList';

function HelpInfoTab() {
  return (
    <TabsContent value="help" className="mt-6">
      <CommonHeader title="도움말" />
      <HelpInfoList />
    </TabsContent>
  );
}

export default HelpInfoTab;

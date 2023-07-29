import FusePageCarded from '@fuse/core/FusePageCarded';
import withReducer from '../../../store/withReducer';
import useThemeMediaQuery from '@fuse/hooks/useThemeMediaQuery';
import reducer from '../../../store';
import CampaignHeader from './CampaignHeader';
import CampaignMain from './CampaignMain';
import RightSidebar from './RightSidebar';


function CampaignPage() {
  const isMobile = useThemeMediaQuery((theme) => theme.breakpoints.down('lg'));

  return (
    <FusePageCarded
      header={<CampaignHeader />}
      content={<CampaignMain/>}
      rightSidebarContent={
        <RightSidebar/>
    }
      scroll={isMobile ? 'normal' : 'content'}
    />
  );
}

export default withReducer('eCommerceApp', reducer)(CampaignPage);



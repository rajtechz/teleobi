import FusePageCarded from '@fuse/core/FusePageCarded';
import withReducer from '../../../store/withReducer';
import useThemeMediaQuery from '@fuse/hooks/useThemeMediaQuery';
import reducer from '../../../store';
import CampaignHeader from './PackageHeader';
import CampaignMain from './PackageMain';


function Package() {
  const isMobile = useThemeMediaQuery((theme) => theme.breakpoints.down('lg'));

  return (
    <FusePageCarded
      header={<CampaignHeader />}
      content={<CampaignMain/>}
   
      scroll={isMobile ? 'normal' : 'content'}
    />
  );
}

export default withReducer('eCommerceApp', reducer)(Package);



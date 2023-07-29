import FusePageCarded from '@fuse/core/FusePageCarded';
import withReducer from '../../../store/withReducer';
import useThemeMediaQuery from '@fuse/hooks/useThemeMediaQuery';
import reducer from '../../../store';
import Boatlist from './BoatList';


function BoatList() {
  const isMobile = useThemeMediaQuery((theme) => theme.breakpoints.down('lg'));

  return (
    <FusePageCarded
      header={<Boatlist />}
   
      scroll={isMobile ? 'normal' : 'content'}
    />
  );
}

export default withReducer('BoatList', reducer)(BoatList);



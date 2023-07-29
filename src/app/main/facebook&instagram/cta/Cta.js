import FusePageCarded from '@fuse/core/FusePageCarded';
import withReducer from '../../../store/withReducer';
import useThemeMediaQuery from '@fuse/hooks/useThemeMediaQuery';
import reducer from '../../../store';
import CtaHeader from '../cta/CtaHeader'
import CtaMain from '../cta/CtaMain'

function Cta() {
  const isMobile = useThemeMediaQuery((theme) => theme.breakpoints.down('lg'));

  return (
    <FusePageCarded
      header={<CtaHeader />}
      content={<CtaMain/>}
      scroll={isMobile ? 'normal' : 'content'}
    />
  );
}

export default withReducer('eCommerceApp', reducer)(Cta);



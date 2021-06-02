import PageContainer from 'components/PageContainer';
import Actions from 'components/Actions';

export default function Home() {
  return (
    <PageContainer title="Next.js Chakra Starter">
      <Actions switchName="Second Page" />
    </PageContainer>
  );
}

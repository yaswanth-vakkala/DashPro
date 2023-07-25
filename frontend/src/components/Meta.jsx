import { Helmet } from 'react-helmet-async';

const Meta = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta name='keyword' content={keywords} />
    </Helmet>
  );
};

Meta.defaultProps = {
  title: 'DashPro',
  description: 'We sell products related to dashcam for free',
  keywords: 'electronics, buy electronics, cheap electroincs',
};

export default Meta;

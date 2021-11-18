import Notice from '@api/domain/notice';

interface Major {
  id: number;
  name: string;
  location: string;
  telephoneNumber: string;
  homepageUrl: string;
  association: string;
  president: string;
  notices: Notice[];
}

export default Major;

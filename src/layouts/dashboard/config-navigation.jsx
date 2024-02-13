import SvgColor from '../../components/svg-color';

// ----------------------------------------------------------------------

const icon = (name) => (
  <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />
);

const navConfig = [
  {
    title: 'Calendario',
    path: '/',
    icon: icon('calendar-mark-svgrepo-com'),
  },
];

export default navConfig;

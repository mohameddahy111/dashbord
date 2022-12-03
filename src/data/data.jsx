import {
  AssignmentOutlined,
  BadgeOutlined,
  DashboardOutlined,
  Inventory2Outlined,
  LocalShippingOutlined,
  MessageOutlined,
  NotificationsNoneOutlined,
  PeopleAltOutlined,
  StackedBarChartOutlined,
  TuneOutlined,
} from '@mui/icons-material';


const data = {
  
  dailySales: [
    {
      name: '10 Am',
      seles: 100,
    },
    {
      name: '11 Am',
      seles: 300,
    },
    { name: '12 pm', seles: 400 },
    {
      name: '1 pm',
      seles: 600,
    },
    {
      name: '2 pm',
      seles: 900,
    },
    { name: '3 pm', seles: 300 },
    { name: '4 pm', seles: 1000 },
    { name: '5 pm', sles: 400 },
    { name: '6 pm', seles: 800 },
    { name: '7 pm', seles: 1200 },
    { name: '8 pm', seles: 100 },
    { name: '9 pm', seles: 1800 },
    { name: '10 pm', seles: 1500 },
    { name: '11 pm', seles: 200 },
  ],
  weekilySeles: [
    { name: 'st', sele: 8900 },
    { name: 'sun', sele: 12000 },
    { name: 'mon', sele: 7000 },
    { name: 'tus', sele: 5000 },
    { name: 'we', sele: 10000 },
    { name: 'the', sele: 12000 },
    { name: 'fir', sele: 9000 },
  ],
  monthlyEarningsOpt: [
    { name: 'jan', sele: 108900 },
    { name: 'feb', sele: 112000 },
    { name: 'mar', sele: 107000 },
    { name: 'api', sele: 150000 },
    { name: 'may', sele: 133000 },
    { name: 'jun', sele: 123000 },
    { name: 'jul', sele: 98000 },
    { name: 'aus', sele: 910000 },
    { name: 'sep', sele: 160000 },
    { name: 'oct', sele: 50000 },
    { name: 'nov', sele: 100000 },
    { name: 'des', sele: 110000 },
  ],
  dashbordList: [
    { name: 'Dashbord', icone: <DashboardOutlined sx={{color :'#208080'}} />, router: '/home' },
    { name: 'tasks', icone: <AssignmentOutlined sx={{color :'#208080'}} />, router: '/home/tasks' },
    { name: 'users', icone: <PeopleAltOutlined sx={{color :'#208080'}} />, router: '/home/users' },
    {
      name: 'productes',
      icone: <Inventory2Outlined sx={{color :'#208080'}} />,
      router: '/home/productes',
    },
    { name: 'employees', icone: <BadgeOutlined sx={{color :'#208080'}} />, router: '/home/employees' },
    {
      name: 'orders',
      icone: <LocalShippingOutlined sx={{color :'#208080'}} />,
      router: '/home/orders',
    },
    { name: 'messages', icone: <MessageOutlined sx={{color :'#208080'}} />, router: '/home/message' },
    {
      name: 'notifications',
      icone: <NotificationsNoneOutlined sx={{color :'#208080'}} />   ,
      router: '/home/notifications',
    },
    {
      name: 'charts',
      icone: <StackedBarChartOutlined sx={{color :'#208080'}} />,
      router: '/home/charts',
    },
    { name: 'setting', icone: <TuneOutlined sx={{color :'#208080'}} />, router: '/home/setting' },
  ],
};

export default data;

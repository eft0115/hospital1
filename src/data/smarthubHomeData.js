import AssignmentTurnedInOutlinedIcon from '@mui/icons-material/AssignmentTurnedInOutlined';
import BusinessCenterOutlinedIcon from '@mui/icons-material/BusinessCenterOutlined';
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';
import HealthAndSafetyOutlinedIcon from '@mui/icons-material/HealthAndSafetyOutlined';
import LocalHospitalOutlinedIcon from '@mui/icons-material/LocalHospitalOutlined';
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';
import ScheduleOutlinedIcon from '@mui/icons-material/ScheduleOutlined';

export const situationCards = [
  {
    title: '사업장 출장검진을 알아보고 있습니다',
    description: '인원, 일정, 검진 항목, 결과 전달까지 기업 담당자 흐름으로 안내합니다.',
    icon: BusinessCenterOutlinedIcon,
    color: 'primary.main',
  },
  {
    title: '입사 전 검진이 필요합니다',
    description: '배치전·배치후검진 준비물과 결과 확인 시점을 빠르게 확인합니다.',
    icon: AssignmentTurnedInOutlinedIcon,
    color: 'secondary.dark',
  },
  {
    title: '특수건강검진 대상인지 궁금합니다',
    description: '야간근로, 유해인자, 사업장 검진 상담으로 이어지는 기준을 정리합니다.',
    icon: HealthAndSafetyOutlinedIcon,
    color: 'warning.main',
  },
  {
    title: '가까운 외래 진료도 확인하고 싶습니다',
    description: '지역 주민을 위한 진료과, 검사, 오시는 길 정보를 연결합니다.',
    icon: LocalHospitalOutlinedIcon,
    color: 'primary.dark',
  },
];

export const serviceCards = [
  {
    label: 'B2B',
    title: '출장검진',
    description: '사업장, 공단, 건설현장, 학교·기관 검진을 현장 운영 관점으로 안내합니다.',
    accent: '#0096D1',
  },
  {
    label: 'Worker',
    title: '배치전·배치후검진',
    description: '개인 근로자의 준비물, 금식 여부, 방문 전 확인사항을 먼저 보여줍니다.',
    accent: '#8CC63F',
  },
  {
    label: 'Special',
    title: '특수건강검진',
    description: '대상 여부와 검진 주기, 야간근로자 케이스를 쉽게 분리합니다.',
    accent: '#F5A623',
  },
];

export const processFlows = {
  enterprise: [
    '문의 접수',
    '인원·일정 조율',
    '검진 항목 확인',
    '현장 방문 검진',
    '결과 전달',
  ],
  personal: [
    '대상 확인',
    '준비물 확인',
    '예약 또는 방문',
    '검진 진행',
    '결과 확인',
  ],
};

export const trustItems = [
  {
    title: '현장 대응',
    description: '건설현장, 물류센터, 제조업, 학교·기관 등 현장 단위 문의에 맞춥니다.',
    icon: PlaceOutlinedIcon,
  },
  {
    title: '일정 중심 안내',
    description: '검진 전 준비부터 결과 확인까지 필요한 시간을 먼저 정리합니다.',
    icon: ScheduleOutlinedIcon,
  },
  {
    title: '대상자 분리',
    description: '기업 담당자와 개인 근로자의 질문을 한 화면에서 섞지 않습니다.',
    icon: GroupsOutlinedIcon,
  },
  {
    title: '확인 가능한 절차',
    description: '문의 후 어떤 방식으로 연락과 검진이 이어지는지 예측 가능하게 만듭니다.',
    icon: CheckCircleOutlineOutlinedIcon,
  },
];

export const faqs = [
  {
    question: '배치전검진은 개인도 받을 수 있나요?',
    answer: '개인 근로자도 상담 후 검진 가능 여부와 준비물을 확인할 수 있도록 안내합니다.',
  },
  {
    question: '출장검진은 몇 명부터 문의할 수 있나요?',
    answer: '사업장 위치, 예상 인원, 검진 항목, 희망 일정에 따라 담당자가 가능 여부를 확인합니다.',
  },
  {
    question: '특수건강검진 대상 여부는 어떻게 확인하나요?',
    answer: '사업장 유해인자, 근무 형태, 야간근로 여부 등 기본 정보를 바탕으로 상담 흐름을 제공합니다.',
  },
];

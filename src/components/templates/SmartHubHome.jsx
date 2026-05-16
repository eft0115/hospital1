import { useEffect, useMemo, useRef, useState } from 'react';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import CloseIcon from '@mui/icons-material/Close';
import EventAvailableOutlinedIcon from '@mui/icons-material/EventAvailableOutlined';
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';
import HealthAndSafetyOutlinedIcon from '@mui/icons-material/HealthAndSafetyOutlined';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import MedicalServicesOutlinedIcon from '@mui/icons-material/MedicalServicesOutlined';
import PhoneInTalkOutlinedIcon from '@mui/icons-material/PhoneInTalkOutlined';
import ScheduleOutlinedIcon from '@mui/icons-material/ScheduleOutlined';
import {
  AppBar,
  Box,
  Button,
  Chip,
  Container,
  Divider,
  IconButton,
  Stack,
  Typography,
} from '@mui/material';
import Grid from '@mui/material/Grid';

import {
  faqs,
  processFlows,
  situationCards,
} from '../../data/smarthubHomeData';
import heroBackgroundImage from '../../../material/test.png';
import consultingBackgroundImage from '../../../material/cara_2.png';

const mainListTabs = [
  {
    label: '첫 방문고객',
    title: '빠른예약',
    description: '성함과 연락처를 남겨주시면 전화를 드려 빠르게 예약을 도와드립니다.',
    links: [
      { label: '예약하기', href: '/content/03reserv/01_01.asp' },
      { label: '전화 문의', href: '#contact' },
    ],
  },
  {
    label: '인터넷 간편 예약',
    title: '진료예약',
    description: '진료과와 의료진을 확인하고 온라인 예약 흐름으로 이동합니다.',
    links: [
      { label: '진료예약', href: '/content/03reserv/01_01.asp' },
      { label: '종합건강검진 예약', href: '/content/02depart/04_03.asp' },
    ],
  },
  {
    label: '진료과/의료진',
    title: '의료진 검색',
    description: '진료과와 의료진 안내를 상세히 확인할 수 있습니다.',
    links: [
      { label: '진료과/의료진', href: '/content/02depart/01_01.asp' },
      { label: '전문센터', href: '/content/02depart/02_01.asp' },
    ],
  },
  {
    label: '이용안내',
    title: '방문 안내',
    description: '내원 전 필요한 위치, 배치도, 진료 절차 정보를 확인합니다.',
    links: [
      { label: '찾아오시는 길', href: '/content/04guide/01_01.asp' },
      { label: '원내배치도', href: '/content/04guide/02_01.asp' },
      { label: '진료안내 이용절차도', href: '/content/01treat/01_01.asp' },
    ],
  },
  {
    label: '증명서 발급',
    title: '서류 발급',
    description: '증명서와 진료기록 사본 발급 경로를 안내합니다.',
    links: [
      {
        label: '인터넷 증명서발급',
        href: 'https://lemoncare.lemonhc.com/ui/cert/web/cgknuh/#/login',
        external: true,
      },
      { label: '진단서발급', href: '/content/03reserv/04_01.asp' },
      { label: '진료기록사본발급', href: '/content/03reserv/04_02.asp#no2' },
    ],
  },
  {
    label: '공고안내',
    title: '병원 소식',
    description: '공지사항과 채용, 입찰 정보를 빠르게 확인합니다.',
    links: [
      { label: '공지사항', href: '/content/05intro/02_01.asp' },
      { label: '입찰공고', href: '/content/05intro/02_04.asp' },
      { label: '채용공고', href: '/content/05intro/02_05.asp' },
    ],
  },
];

const mainConBoxes = [
  {
    className: 'box01',
    title: '진료안내',
    icon: MedicalServicesOutlinedIcon,
    links: [
      { label: '진료안내 이용절차도', href: '/content/01treat/01_01.asp' },
      { label: '입/퇴원 안내', href: '/content/01treat/02_01.asp' },
      { label: '응급진료 안내', href: '/content/01treat/03_01.asp' },
      { label: '비급여진료비', href: '/content/01treat/04_01.asp' },
    ],
  },
  {
    className: 'box02',
    title: '예약조회발급',
    icon: EventAvailableOutlinedIcon,
    links: [
      { label: '진료예약', href: '/content/03reserv/01_01.asp' },
      {
        label: '인터넷 증명서발급',
        href: 'https://lemoncare.lemonhc.com/ui/cert/web/cgknuh/#/login',
        external: true,
      },
      { label: '진단서발급', href: '/content/03reserv/04_01.asp' },
      { label: '진료기록사본발급', href: '/content/03reserv/04_02.asp#no2' },
    ],
  },
  {
    className: 'box03',
    title: '진료과/의료진',
    icon: GroupsOutlinedIcon,
    viewHref: '/content/02depart/01_01.asp',
  },
  {
    className: 'box04',
    title: '건강증진센터',
    icon: HealthAndSafetyOutlinedIcon,
    links: [
      { label: '종합건강검진 예약', href: '/content/02depart/04_03.asp' },
      { label: '국가건강검진 예약', href: '/content/02depart/04_02.asp' },
    ],
  },
];

const popupZoneOne = [
  {
    title: '출장 건강검진 상담',
    description: '건설현장, 산업체, 학교 검진 일정을 전담 코디네이터가 조율합니다.',
    label: '기업검진',
    href: '#contact',
  },
  {
    title: '내과·외과 진료 안내',
    description: '건강검진 이후 필요한 진료 연계까지 한 번에 확인하세요.',
    label: '진료연계',
    href: '#contact',
  },
  {
    title: '128채널 CT 운영',
    description: '정밀 검사 장비 기반으로 빠르고 명확한 검진 흐름을 제공합니다.',
    label: '정밀검사',
    href: '#contact',
  },
];

const popupZoneTwo = [
  {
    title: '국가·암 검진센터',
    description: '국가검진, 암검진, 종합검진 예약 경로를 안내합니다.',
    label: '검진센터',
    href: '#contact',
  },
  {
    title: '위·대장 내시경',
    description: '내시경 검사 준비사항과 당일검진 가능 여부를 확인하세요.',
    label: '내시경',
    href: '#contact',
  },
  {
    title: '결과 상담 및 사후관리',
    description: '검진 결과 확인 이후 필요한 상담과 추가 진료를 연결합니다.',
    label: '결과상담',
    href: '#contact',
  },
];

const boardTabs = [
  {
    label: '병원소식',
    moreHref: '/content/04info/01_01.asp',
    items: [
      ['스마트허브병원 출장 건강검진 프로그램 확대 운영', '26-05-15'],
      ['산업체 특수건강검진 사전 상담 절차 안내', '26-05-14'],
      ['국가검진 및 암검진 예약 가능 일정 안내', '26-05-10'],
      ['건강검진센터 토요일 운영 시간 안내', '26-05-04'],
    ],
  },
  {
    label: '언론보도',
    moreHref: '/content/04info/04_01.asp',
    items: [
      ['스마트허브병원, 지역 사업장 건강관리 협력 강화', '26-05-13'],
      ['정밀검진 장비 운영으로 빠른 검진 흐름 제공', '26-05-08'],
      ['기업 담당자를 위한 출장검진 상담창구 운영', '26-05-02'],
    ],
  },
  {
    label: '건강강좌',
    moreHref: '/content/04info/03_01.asp',
    items: [
      ['직장인을 위한 대사증후군 관리 강좌', '26-05-12'],
      ['위·대장 내시경 전 준비사항 안내', '26-05-09'],
      ['건강검진 결과표 읽는 법', '26-05-01'],
    ],
  },
  {
    label: '건강정보',
    moreHref: '/content/04info/02_01.asp',
    items: [
      ['혈압·혈당 수치가 높게 나왔을 때 확인할 것', '26-05-15'],
      ['근로자 특수검진 대상자 확인 방법', '26-05-11'],
      ['검진 전 금식과 복용약 체크리스트', '26-05-06'],
    ],
  },
  {
    label: '채용공고',
    moreHref: '/content/04info/11_01.asp',
    items: [
      ['건강검진센터 행정 코디네이터 채용공고', '26-05-13'],
      ['진료지원팀 임시직원 채용공고', '26-05-08'],
      ['검진 운영지원 인력 채용공고', '26-04-30'],
    ],
  },
];

const footerCertifications = [
  ['보건복지부 인증의료기관', '인증의료기관', '복지', '#D4A847'],
  ['대한신장협회', '우수인공신장실 인증', '신장', '#B8914A'],
  ['경기도지정', '지역응급의료센터', '응급', '#2D7E9D'],
  ['한국보훈복지의료공단', '보훈위탁지정병원', '보훈', '#7CAE37'],
  ['수원시아동학대', '전담의료기관 지정', '아동', '#4E8BC8'],
  ['간호간병통합', '서비스병동운영', '간병', '#6AA2B8'],
];

const footerLinks = [
  ['이용약관', '/member/terms.php'],
  ['개인정보처리방침', '/member/privacy.php'],
  ['환자의권리와의무', '/member/patient-right.php'],
  ['비급여수가', '/medical/uninsured.php'],
  ['응급실당직표', '/center/center3_2.php#contentTit'],
];

const footerSns = [
  ['Talk', 'https://pf.kakao.com/_wHVkT', '#FFE812'],
  ['f', 'https://www.facebook.com/profile.php?id=61558260970315', '#4267B2'],
  ['◎', 'https://www.instagram.com/dswhosp/', '#F56040'],
  ['blog', 'https://blog.naver.com/dswhosp_', '#3DBE48'],
];

const ambientSectionBackground = {
  backgroundColor: '#FAFAF8',
  backgroundImage:
    'radial-gradient(circle at 8% 10%, rgba(227,139,0,0.22) 0%, rgba(227,139,0,0) 30%), radial-gradient(circle at 86% 16%, rgba(0,93,155,0.18) 0%, rgba(0,93,155,0) 34%), radial-gradient(circle at 52% 78%, rgba(140,198,63,0.18) 0%, rgba(140,198,63,0) 36%), linear-gradient(135deg, rgba(227,139,0,0.10) 0%, rgba(140,198,63,0.10) 46%, rgba(0,93,155,0.12) 100%), linear-gradient(180deg, #FAFAF8 0%, #F7FBF4 48%, #F6F9FC 100%)',
};

const smartHubLocation = {
  lat: 37.33509167013,
  lng: 126.7303021312,
};

function SectionHeading({ eyebrow, title, description }) {
  return (
    <Stack spacing={ 1.5 } sx={ { maxWidth: 760, mb: { xs: 4, md: 6 } } }>
      <Typography variant="overline" color="primary.main" sx={ { fontWeight: 800 } }>
        { eyebrow }
      </Typography>
      <Typography variant="h2" sx={ { fontSize: { xs: 34, md: 54 } } }>
        { title }
      </Typography>
      { description ? (
        <Typography variant="body1" color="text.secondary" sx={ { fontSize: { md: 18 } } }>
          { description }
        </Typography>
      ) : null }
    </Stack>
  );
}

function PopupCarousel({ items, activeIndex, onChange, variant = 'primary' }) {
  const isPrimary = variant === 'primary';
  const nextIndex = (activeIndex + 1) % items.length;
  const prevIndex = (activeIndex + items.length - 1) % items.length;

  return (
    <Box>
      <Stack direction="row" spacing={ 0.8 } alignItems="center" justifyContent="space-between" sx={ { mb: 1.4 } }>
        <Stack direction="row" spacing={ 0.7 } alignItems="center">
          { items.map((item, index) => (
            <Box
              key={ item.title }
              component="button"
              type="button"
              aria-label={ `${item.title} 보기` }
              className="numbtn"
              onClick={ () => onChange(index) }
              sx={ {
                width: activeIndex === index ? 24 : 10,
                height: 10,
                p: 0,
                border: 0,
                borderRadius: 99,
                bgcolor: activeIndex === index
                  ? (isPrimary ? 'primary.main' : 'secondary.main')
                  : (isPrimary ? 'rgba(0,93,155,0.22)' : 'rgba(245,166,35,0.28)'),
                cursor: 'pointer',
                transition: 'width 180ms ease, background-color 180ms ease, transform 180ms ease',
                '&:hover': {
                  transform: 'translateY(-1px)',
                },
              } }
            />
          )) }
        </Stack>
        <Stack direction="row" spacing={ 0.6 }>
          <IconButton
            size="small"
            aria-label="이전 슬라이드"
            onClick={ () => onChange(prevIndex) }
            sx={ {
              width: 30,
              height: 30,
              border: '1px solid rgba(0,93,155,0.16)',
              bgcolor: '#fff',
              '&:hover': { bgcolor: isPrimary ? 'rgba(0,93,155,0.08)' : 'rgba(245,166,35,0.14)' },
            } }
          >
            <ChevronLeftIcon fontSize="small" />
          </IconButton>
          <IconButton
            size="small"
            aria-label="다음 슬라이드"
            onClick={ () => onChange(nextIndex) }
            sx={ {
              width: 30,
              height: 30,
              border: '1px solid rgba(0,93,155,0.16)',
              bgcolor: '#fff',
              '&:hover': { bgcolor: isPrimary ? 'rgba(0,93,155,0.08)' : 'rgba(245,166,35,0.14)' },
            } }
          >
            <ChevronRightIcon fontSize="small" />
          </IconButton>
        </Stack>
      </Stack>

      <Box sx={ { overflow: 'hidden', borderRadius: '8px' } }>
        <Box
          component="ul"
          sx={ {
            width: `${items.length * 100}%`,
            m: 0,
            p: 0,
            listStyle: 'none',
            display: 'flex',
            transform: `translateX(-${activeIndex * (100 / items.length)}%)`,
            transition: 'transform 420ms cubic-bezier(0.22, 1, 0.36, 1)',
          } }
        >
          { items.map((item) => (
            <Box
              component="li"
              key={ item.title }
              sx={ {
                width: `${100 / items.length}%`,
                flexShrink: 0,
              } }
            >
              <Box
                sx={ {
                  minHeight: 230,
                  p: 2.4,
                  borderRadius: '8px',
                  color: isPrimary ? '#fff' : 'text.primary',
                  background: isPrimary
                    ? 'linear-gradient(135deg, rgba(0,150,209,0.96), rgba(0,84,135,0.96))'
                    : undefined,
                  bgcolor: isPrimary ? undefined : '#FFF8E8',
                  border: isPrimary ? 0 : '1px solid rgba(245,166,35,0.32)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                } }
              >
                <Box>
                  <Typography sx={ { color: isPrimary ? '#FFE2A1' : 'secondary.dark', fontWeight: 900, mb: 1 } }>
                    { item.label }
                  </Typography>
                  <Typography sx={ { color: isPrimary ? '#fff' : '#111', fontSize: 25, fontWeight: 950, lineHeight: 1.18 } }>
                    { item.title }
                  </Typography>
                  <Typography sx={ { mt: 1.4, color: isPrimary ? 'rgba(255,255,255,0.84)' : 'text.secondary' } }>
                    { item.description }
                  </Typography>
                </Box>
                <Button
                  component="a"
                  href={ item.href }
                  color={ isPrimary ? 'inherit' : 'primary' }
                  endIcon={ <ArrowForwardIcon /> }
                  sx={ { alignSelf: 'flex-start', px: 0, fontWeight: 900 } }
                >
                  자세히 보기
                </Button>
              </Box>
            </Box>
          )) }
        </Box>
      </Box>
    </Box>
  );
}

/**
 * 스마트허브병원 Home 페이지 템플릿
 *
 * Props:
 * @param {string} hospitalName - 헤더와 히어로에 표시할 병원명 [Optional, 기본값: 스마트허브병원]
 *
 * Example usage:
 * <SmartHubHome hospitalName="스마트허브병원" />
 */
function ContentCarousel({
  items,
  activeIndex,
  onChange,
  getLabel,
  renderItem,
  minHeight,
  isExpanded,
  onExpand,
  buttonLabel,
  gridTemplateColumns,
}) {
  if (typeof isExpanded === 'boolean') {
    return (
      <Box>
        { isExpanded ? (
          <Box
            component="ul"
            sx={ {
              m: 0,
              p: 0,
              listStyle: 'none',
              display: 'grid',
              gridTemplateColumns,
              gap: 2,
            } }
          >
            { items.map((item, index) => (
              <Box component="li" key={ getLabel(item, index) }>
                { renderItem(item, index) }
              </Box>
            )) }
          </Box>
        ) : (
          <Box sx={ { display: 'flex', justifyContent: 'center' } }>
            <Button
              variant="contained"
              color="primary"
              size="large"
              endIcon={ <ArrowForwardIcon /> }
              onClick={ onExpand }
              sx={ {
                minHeight: 52,
                px: 3,
                borderRadius: '8px',
                fontWeight: 900,
                boxShadow: '0 6px 0 rgba(0,93,155,0.18)',
                '&:hover': {
                  transform: 'translateY(-1px)',
                  boxShadow: '0 7px 0 rgba(0,93,155,0.20)',
                },
              } }
            >
              { buttonLabel }
            </Button>
          </Box>
        ) }
      </Box>
    );
  }

  const nextIndex = (activeIndex + 1) % items.length;
  const prevIndex = (activeIndex + items.length - 1) % items.length;

  return (
    <Box>
      <Stack
        direction="row"
        spacing={ 1 }
        alignItems="center"
        justifyContent="space-between"
        sx={ { mb: 2 } }
      >
        <Stack direction="row" spacing={ 0.8 } alignItems="center">
          { items.map((item, index) => {
            const label = getLabel(item, index);

            return (
              <Box
                key={ label }
                component="button"
                type="button"
                aria-label={ `${label} 보기` }
                onClick={ () => onChange(index) }
                sx={ {
                  width: activeIndex === index ? 42 : 14,
                  height: 14,
                  p: 0,
                  border: 0,
                  borderRadius: 99,
                  bgcolor: activeIndex === index ? 'primary.main' : 'rgba(0,93,155,0.22)',
                  cursor: 'pointer',
                  transition: 'width 180ms ease, background-color 180ms ease, transform 180ms ease',
                  '&:hover': {
                    transform: 'translateY(-1px)',
                    bgcolor: activeIndex === index ? 'primary.main' : 'rgba(0,93,155,0.36)',
                  },
                } }
              />
            );
          }) }
        </Stack>

        <Stack direction="row" spacing={ 0.8 }>
          <IconButton
            aria-label="이전 슬라이드"
            onClick={ () => onChange(prevIndex) }
            sx={ {
              width: 44,
              height: 44,
              border: '1px solid rgba(0,93,155,0.16)',
              bgcolor: '#fff',
              boxShadow: '0 4px 0 rgba(0,93,155,0.08)',
              '&:hover': {
                bgcolor: 'primary.main',
                color: '#fff',
                transform: 'translateY(-1px)',
              },
            } }
          >
            <ChevronLeftIcon />
          </IconButton>
          <IconButton
            aria-label="다음 슬라이드"
            onClick={ () => onChange(nextIndex) }
            sx={ {
              width: 44,
              height: 44,
              border: '1px solid rgba(0,93,155,0.16)',
              bgcolor: '#fff',
              boxShadow: '0 4px 0 rgba(0,93,155,0.08)',
              '&:hover': {
                bgcolor: 'primary.main',
                color: '#fff',
                transform: 'translateY(-1px)',
              },
            } }
          >
            <ChevronRightIcon />
          </IconButton>
        </Stack>
      </Stack>

      <Box sx={ { overflow: 'hidden', borderRadius: '8px' } }>
        <Stack
          component="ul"
          direction="row"
          sx={ {
            width: `${items.length * 100}%`,
            m: 0,
            p: 0,
            listStyle: 'none',
            transform: `translateX(-${activeIndex * (100 / items.length)}%)`,
            transition: 'transform 420ms cubic-bezier(0.22, 1, 0.36, 1)',
          } }
        >
          { items.map((item, index) => (
            <Box
              component="li"
              key={ getLabel(item, index) }
              sx={ {
                width: `${100 / items.length}%`,
                minHeight,
                flexShrink: 0,
                px: { xs: 0.25, sm: 0.5 },
              } }
            >
              { renderItem(item, index) }
            </Box>
          )) }
        </Stack>
      </Box>
    </Box>
  );
}

function SmartHubHome() {
  const naverMapRef = useRef(null);
  const naverMapInstanceRef = useRef(null);
  const [activeFlow, setActiveFlow] = useState('enterprise');
  const [activeMainTab, setActiveMainTab] = useState(1);
  const [activeHeroSlide, setActiveHeroSlide] = useState(1);
  const [openMegaMenuIndex, setOpenMegaMenuIndex] = useState(null);
  const [megaMenuButtonWidth, setMegaMenuButtonWidth] = useState(160);
  const [megaMenuLeft, setMegaMenuLeft] = useState(0);
  const [isKakaoCtaHovered, setIsKakaoCtaHovered] = useState(false);
  const [activePopupOne, setActivePopupOne] = useState(0);
  const [activePopupTwo, setActivePopupTwo] = useState(0);
  const [activeBoardTab, setActiveBoardTab] = useState(0);
  const [isPopupPlaying, setIsPopupPlaying] = useState(true);
  const [isQuickReserveOpen, setIsQuickReserveOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);
  const [isTopBannerOpen, setIsTopBannerOpen] = useState(true);
  const [isProcessExpanded, setIsProcessExpanded] = useState(false);
  const [activeSituationPath, setActiveSituationPath] = useState(0);
  const [activeProcessStep, setActiveProcessStep] = useState(0);
  const [isNaverMapReady, setIsNaverMapReady] = useState(false);
  const [naverMapStatus, setNaverMapStatus] = useState('idle');
  const naverMapClientId = import.meta.env.VITE_NAVER_MAP_CLIENT_ID;

  const activeSteps = useMemo(() => processFlows[activeFlow], [activeFlow]);
  const activeMainListTab = mainListTabs[activeMainTab];
  const activeBoard = boardTabs[activeBoardTab];
  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveProcessStep((current) => (current + 1) % processFlows.enterprise.length);
    }, 2000);

    return () => window.clearInterval(timer);
  }, []);

  useEffect(() => {
    if (!naverMapClientId || !naverMapRef.current) {
      setNaverMapStatus('missing-key');
      return undefined;
    }

    let isDisposed = false;
    setNaverMapStatus('loading');
    const initializeNaverMap = () => {
      if (isDisposed || !window.naver?.maps || !naverMapRef.current) {
        return;
      }

      naverMapInstanceRef.current = null;
      const position = new window.naver.maps.LatLng(smartHubLocation.lat, smartHubLocation.lng);
      const map = new window.naver.maps.Map(naverMapRef.current, {
        center: position,
        zoom: 17,
        minZoom: 12,
        zoomControl: true,
        zoomControlOptions: {
          position: window.naver.maps.Position.TOP_RIGHT,
        },
      });

      new window.naver.maps.Marker({
        position,
        map,
        title: '허브스마트병원',
        icon: {
          content: `
            <div style="
              position: relative;
              width: 54px;
              height: 54px;
              border-radius: 50%;
              background: #0096D1;
              border: 4px solid #fff;
              box-shadow: 0 14px 28px rgba(0,93,155,0.28);
              display: flex;
              align-items: center;
              justify-content: center;
              color: #fff;
              font-weight: 900;
              font-size: 13px;
              font-family: Pretendard, system-ui, sans-serif;
            ">
              SH
              <span style="
                position: absolute;
                left: 50%;
                bottom: -10px;
                width: 16px;
                height: 16px;
                background: #0096D1;
                border-right: 4px solid #fff;
                border-bottom: 4px solid #fff;
                transform: translateX(-50%) rotate(45deg);
                box-shadow: 8px 8px 14px rgba(0,93,155,0.18);
              "></span>
            </div>
          `,
          size: new window.naver.maps.Size(54, 64),
          anchor: new window.naver.maps.Point(27, 64),
        },
      });

      const infoWindow = new window.naver.maps.InfoWindow({
        content: `
          <div style="
            padding: 12px 14px;
            min-width: 190px;
            border-radius: 12px;
            border: 1px solid rgba(0,93,155,0.18);
            box-shadow: 0 12px 26px rgba(0,93,155,0.16);
            font-family: Pretendard, system-ui, sans-serif;
          ">
            <strong style="display:block;color:#0079AA;font-size:15px;line-height:1.25;">허브스마트병원</strong>
            <span style="display:block;margin-top:5px;color:#5C6B73;font-size:12px;line-height:1.35;">경기도 시흥시 공단1대로 263</span>
          </div>
        `,
        borderWidth: 0,
        backgroundColor: 'transparent',
        anchorSize: new window.naver.maps.Size(10, 8),
        pixelOffset: new window.naver.maps.Point(0, -12),
      });

      infoWindow.open(map, position);
      window.naver.maps.Event.once(map, 'init', () => {
        map.setCenter(position);
        map.setZoom(17);
        map.refresh();
      });
      window.setTimeout(() => {
        map.refresh();
        map.setCenter(position);
      }, 250);

      naverMapInstanceRef.current = map;
      let paintCheckCount = 0;
      const verifyMapPaint = () => {
        if (isDisposed || !naverMapRef.current) {
          return;
        }

        const hasMapTile = Boolean(
          naverMapRef.current.querySelector('img[src*="map"]')
          || naverMapRef.current.querySelector('img[src*="naver"]')
          || naverMapRef.current.querySelector('canvas')
        );

        if (hasMapTile) {
          setIsNaverMapReady(true);
          setNaverMapStatus('ready');
          return;
        }

        paintCheckCount += 1;
        if (paintCheckCount < 20) {
          window.setTimeout(verifyMapPaint, 250);
          return;
        }

        setIsNaverMapReady(false);
        setNaverMapStatus('error');
      };

      verifyMapPaint();
    };

    const mapLoadTimer = window.setTimeout(() => {
      if (!naverMapInstanceRef.current) {
        setNaverMapStatus('error');
      }
    }, 5000);

    if (window.naver?.maps) {
      initializeNaverMap();
      return () => {
        isDisposed = true;
        window.clearTimeout(mapLoadTimer);
        naverMapInstanceRef.current = null;
        setIsNaverMapReady(false);
      };
    }

    const existingScript = document.querySelector('script[data-naver-map-sdk="true"]');
    if (existingScript) {
      existingScript.addEventListener('load', initializeNaverMap, { once: true });
      return () => {
        isDisposed = true;
        window.clearTimeout(mapLoadTimer);
        existingScript.removeEventListener('load', initializeNaverMap);
        naverMapInstanceRef.current = null;
        setIsNaverMapReady(false);
      };
    }

    const script = document.createElement('script');
    script.src = `https://oapi.map.naver.com/openapi/v3/maps.js?ncpKeyId=${naverMapClientId}`;
    script.async = true;
    script.dataset.naverMapSdk = 'true';
    script.addEventListener('load', initializeNaverMap);
    script.addEventListener('error', () => setNaverMapStatus('error'));
    document.head.appendChild(script);

    return () => {
      isDisposed = true;
      window.clearTimeout(mapLoadTimer);
      script.removeEventListener('load', initializeNaverMap);
      naverMapInstanceRef.current = null;
      setIsNaverMapReady(false);
    };
  }, [naverMapClientId]);
  const handleMainTabChange = (_, nextValue) => {
    setActiveMainTab(nextValue);
    setIsQuickReserveOpen(false);
  };
  const handleMegaMenuOpen = (event, tabIndex) => {
    setOpenMegaMenuIndex(tabIndex);
    setMegaMenuButtonWidth(event.currentTarget.getBoundingClientRect().width);
    setMegaMenuLeft(event.currentTarget.offsetLeft);
  };
  const handleQuickReserveOpen = () => {
    setActiveMainTab(0);
    setIsQuickReserveOpen(true);
  };
  const closeMegaMenu = () => setOpenMegaMenuIndex(null);

  return (
    <Box
      sx={ {
        minHeight: '100vh',
        ...ambientSectionBackground,
        color: 'text.primary',
        '& .MuiChip-label': {
          bgcolor: '#F5A623',
          color: '#FAFAF8',
        },
      } }
    >
      <AppBar
        position="sticky"
        color="inherit"
        elevation={ 0 }
        sx={ {
          borderBottom: '1px solid',
          borderColor: 'rgba(0, 93, 155, 0.12)',
          bgcolor: '#fff',
        } }
      >
        <Container
          maxWidth={ false }
          disableGutters
          sx={ {
            width: '100%',
            bgcolor: '#fff',
          } }
        >
          { isTopBannerOpen ? (
            <Box
              sx={ {
                position: 'relative',
                px: { xs: 5.5, sm: 7 },
                py: { xs: 2, sm: 2.25 },
                bgcolor: '#4CB7E8',
                color: '#fff',
                fontWeight: 850,
                fontSize: { xs: 14, md: 16 },
                lineHeight: 1.3,
                backgroundImage:
                  'linear-gradient(135deg, rgba(255,255,255,0.20) 0%, rgba(76,183,232,0.98) 34%, rgba(0,93,155,0.96) 100%)',
              } }
            >
              <Stack
                direction={ { xs: 'column', sm: 'row' } }
                alignItems="center"
                justifyContent="center"
                spacing={ { xs: 0.8, sm: 0 } }
              >
                <Typography
                  sx={ {
                    flex: 1,
                    width: '100%',
                    pr: { xs: 0, sm: '10px' },
                    fontWeight: 900,
                    fontSize: 'inherit',
                    textAlign: { xs: 'center', sm: 'right' },
                  } }
                >
                  검진상담전화 : 1899-9114
                </Typography>
                <Box
                  sx={ {
                    flexShrink: 0,
                    width: { xs: 64, sm: '3px' },
                    height: { xs: '3px', sm: 22 },
                    bgcolor: 'rgba(255,255,255,0.86)',
                    borderRadius: 99,
                  } }
                />
                <Stack
                  direction="row"
                  spacing={ 0.9 }
                  alignItems="center"
                  justifyContent={ { xs: 'center', sm: 'flex-start' } }
                  sx={ {
                    flex: 1,
                    width: '100%',
                    pl: { xs: 0, sm: '10px' },
                    pr: 0,
                    py: { xs: '5px', sm: 0 },
                    borderRadius: '8px',
                    bgcolor: 'transparent',
                    boxShadow: 'none',
                    flexWrap: 'wrap',
                  } }
                >
                  <PhoneInTalkOutlinedIcon sx={ { fontSize: 19 } } />
                  <Typography sx={ { fontWeight: 900, fontSize: 'inherit' } }>
                    진료문의 031-431-0119
                  </Typography>
                  <Typography sx={ { fontWeight: 950, fontSize: 'inherit' } }>
                    스마트허브병원
                  </Typography>
                </Stack>
              </Stack>
              <IconButton
                size="small"
                aria-label="상단 배너 닫기"
                onClick={ () => setIsTopBannerOpen(false) }
                sx={ {
                  position: 'absolute',
                  right: { xs: 10, sm: 18 },
                  top: '50%',
                  transform: 'translateY(-50%)',
                  color: '#fff',
                  border: '1px solid rgba(255,255,255,0.52)',
                  bgcolor: 'rgba(255,255,255,0.16)',
                  boxShadow:
                    'inset 0 1px 0 rgba(255,255,255,0.28), 0 3px 8px rgba(12,78,112,0.24)',
                  '&:hover': {
                    bgcolor: 'rgba(255,255,255,0.26)',
                  },
                } }
              >
                <CloseIcon fontSize="small" />
              </IconButton>
            </Box>
          ) : null }
          <Box
            id="main_con01_wrap"
            sx={ {
              py: { xs: 1.4, md: 1.7 },
              px: { xs: 2, md: 3 },
              bgcolor: '#fff',
            } }
          >
            <Box
              id="main_con01"
              sx={ {
                overflow: 'visible',
                borderRadius: '8px',
                bgcolor: '#fff',
                border: '1px solid rgba(0, 93, 155, 0.14)',
                boxShadow:
                  'inset 0 1px 0 rgba(255,255,255,0.95), 0 2px 0 rgba(0,93,155,0.10)',
              } }
            >
              <Stack
                direction={ { xs: 'column', md: 'row' } }
                alignItems={ { xs: 'stretch', md: 'center' } }
                sx={ {
                  bgcolor: '#fff',
                } }
              >
                <Stack
                  direction="row"
                  spacing={ 1.1 }
                  alignItems="center"
                  sx={ {
                    px: { xs: 2, md: 2.4 },
                    py: { xs: 1.4, md: 0 },
                    minHeight: 68,
                    bgcolor: '#F7FAFC',
                    borderTopLeftRadius: '8px',
                    borderBottomLeftRadius: { xs: 0, md: '8px' },
                    borderRight: { md: '1px solid rgba(0, 93, 155, 0.12)' },
                    borderBottom: { xs: '1px solid', md: 0 },
                    borderColor: 'rgba(0, 93, 155, 0.12)',
                    flexShrink: 0,
                  } }
                >
                  <Box
                    aria-hidden="true"
                    sx={ {
                      width: 34,
                      height: 34,
                      borderRadius: '8px',
                      background: 'linear-gradient(135deg, #005D9B, #4CB7E8)',
                      position: 'relative',
                      '&::after': {
                        content: '""',
                        position: 'absolute',
                        right: -4,
                        bottom: -4,
                        width: 14,
                        height: 14,
                        borderRadius: '50%',
                        bgcolor: 'secondary.main',
                        border: '3px solid #fff',
                      },
                    } }
                  />
                  <Typography
                    sx={ {
                      fontSize: { xs: 18, md: 20 },
                      fontWeight: 950,
                      whiteSpace: 'nowrap',
                      color: '#123047',
                    } }
                  >
                    허브스마트병원
                  </Typography>
                </Stack>

                <Box
                  onMouseLeave={ closeMegaMenu }
                  sx={ {
                    flex: 1,
                    minWidth: 0,
                    position: 'relative',
                  } }
                >
                  <Stack
                    component="nav"
                    aria-label="주요 이용 메뉴"
                    direction="row"
                    justifyContent="center"
                    sx={ {
                      minHeight: 68,
                      overflowX: 'auto',
                      px: { xs: 0.6, md: 1 },
                      gap: 0.25,
                    } }
                  >
                    { mainListTabs.slice(1).map((tab, index) => {
                      const tabIndex = index + 1;
                      const isOpen = openMegaMenuIndex === tabIndex;

                      return (
                        <Button
                          key={ tab.label }
                          onMouseEnter={ (event) => handleMegaMenuOpen(event, tabIndex) }
                          onFocus={ (event) => handleMegaMenuOpen(event, tabIndex) }
                          onClick={ () => handleMainTabChange(null, tabIndex) }
                          sx={ {
                            position: 'relative',
                            minHeight: 68,
                            px: { xs: 1.8, md: 2.4 },
                            borderRadius: '8px',
                            fontSize: { xs: 15, md: 17 },
                            fontWeight: 850,
                            whiteSpace: 'nowrap',
                            bgcolor: isOpen ? 'rgba(0, 93, 155, 0.06)' : 'transparent',
                            transform: isOpen ? 'scale(1.04)' : 'scale(1)',
                            transformOrigin: 'center',
                            transition: 'transform 160ms ease, color 160ms ease, background-color 160ms ease',
                            color: isOpen ? 'primary.main' : 'text.primary',
                            '&::after': {
                              content: '""',
                              position: 'absolute',
                              left: 18,
                              right: 18,
                              bottom: 10,
                              height: 3,
                              borderRadius: 99,
                              bgcolor: isOpen ? 'primary.main' : 'transparent',
                              transition: 'background-color 160ms ease',
                            },
                            '&:hover': {
                              bgcolor: 'rgba(0, 93, 155, 0.06)',
                              color: 'primary.main',
                              transform: 'scale(1.04)',
                            },
                          } }
                        >
                          { tab.label }
                        </Button>
                      );
                    }) }
                  </Stack>

                  { openMegaMenuIndex !== null ? (
                    <Box
                      sx={ {
                        position: { xs: 'static', md: 'absolute' },
                        top: '100%',
                        left: { xs: 0, md: megaMenuLeft },
                        width: { xs: '100%', md: 'max-content' },
                        minWidth: { xs: 0, md: megaMenuButtonWidth },
                        maxWidth: { xs: '100%', md: 'none' },
                        zIndex: 8,
                        bgcolor: '#fff',
                        border: '1px solid rgba(0, 93, 155, 0.16)',
                        borderTop: '3px solid',
                        borderTopColor: 'primary.main',
                        borderRadius: '0 0 8px 8px',
                        boxShadow: '0 2px 0 rgba(0,93,155,0.14)',
                        p: 0.8,
                      } }
                    >
                      <Stack
                        component="ul"
                        spacing={ 1 }
                        sx={ {
                          width: { xs: '100%', md: 'max-content' },
                          maxWidth: { xs: '100%', md: 'none' },
                          minWidth: { xs: 0, md: megaMenuButtonWidth },
                          m: 0,
                          p: 0,
                          listStyle: 'none',
                          alignItems: 'stretch',
                        } }
                      >
                        { mainListTabs[openMegaMenuIndex].links.slice(0, 3).map((link) => (
                          <Box component="li" key={ link.label }>
                            <Typography
                              component="a"
                              href={ link.href }
                              target={ link.external ? '_blank' : undefined }
                              rel={ link.external ? 'noreferrer' : undefined }
                              sx={ {
                                color: 'text.primary',
                                display: 'flex',
                                width: 'max-content',
                                minWidth: { xs: 0, md: megaMenuButtonWidth },
                                minHeight: 36,
                                px: 1,
                                borderRadius: '6px',
                                alignItems: 'center',
                                whiteSpace: 'nowrap',
                                fontSize: { xs: 15, md: 16 },
                                fontWeight: 800,
                                textDecoration: 'none',
                                '&:hover': {
                                  color: 'primary.main',
                                  bgcolor: 'rgba(0, 93, 155, 0.06)',
                                },
                              } }
                            >
                              { link.label }
                            </Typography>
                          </Box>
                        )) }
                      </Stack>
                    </Box>
                  ) : null }
                </Box>

                <Box
                  sx={ {
                    p: { xs: 1.4, md: 1 },
                    borderTop: { xs: '1px solid', md: 0 },
                    borderColor: 'divider',
                    flexShrink: 0,
                  } }
                >
                  <Button
                    variant="contained"
                    disableElevation
                    endIcon={ <ArrowForwardIcon /> }
                    onClick={ handleQuickReserveOpen }
                    sx={ {
                      minHeight: 44,
                      px: 2.4,
                      borderRadius: '8px',
                      bgcolor: '#005D9B',
                      color: '#fff',
                      fontWeight: 900,
                      whiteSpace: 'nowrap',
                      boxShadow: '0 2px 0 rgba(0,64,107,0.22)',
                      '&:hover': {
                        bgcolor: '#004B7D',
                        boxShadow: '0 2px 0 rgba(0,64,107,0.28)',
                      },
                    } }
                  >
                    빠른예약
                  </Button>
                </Box>
              </Stack>

              { isQuickReserveOpen ? (
                <Box
                  role="tabpanel"
                  sx={ {
                    display: 'grid',
                    gridTemplateColumns: { xs: '1fr', md: 'minmax(260px, 0.78fr) 1.22fr' },
                    minHeight: { xs: 250, md: 230 },
                    '@keyframes quickReserveSlideIn': {
                      from: {
                        opacity: 0,
                        transform: 'translateX(-42px)',
                      },
                      to: {
                        opacity: 1,
                        transform: 'translateX(0)',
                      },
                    },
                    animation: 'quickReserveSlideIn 420ms cubic-bezier(0.22, 1, 0.36, 1)',
                  } }
                >
                <Box
                  sx={ {
                    p: { xs: 2.6, md: 3.5 },
                    color: '#fff',
                    bgcolor: 'primary.main',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    backgroundImage:
                      'linear-gradient(135deg, rgba(0,150,209,1), rgba(0,84,135,0.95))',
                  } }
                >
                  <Typography sx={ { fontSize: 16, fontWeight: 800, opacity: 0.82, mb: 1 } }>
                    { activeMainListTab.label }
                  </Typography>
                  <Typography
                    variant="h3"
                    sx={ {
                      fontSize: { xs: 30, md: 40 },
                      lineHeight: 1.15,
                      mb: 2,
                    } }
                  >
                    { activeMainListTab.title }
                  </Typography>
                  <Typography sx={ { color: 'rgba(255,255,255,0.86)', fontSize: { md: 17 } } }>
                    { activeMainListTab.description }
                  </Typography>
                </Box>

                <Box
                  sx={ {
                    p: { xs: 2.2, md: 3 },
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'stretch',
                    justifyContent: 'center',
                  } }
                >
                  <IconButton
                    aria-label="빠른예약 패널 닫기"
                    onClick={ () => setIsQuickReserveOpen(false) }
                    sx={ {
                      alignSelf: 'flex-end',
                      mb: 1.2,
                      width: 36,
                      height: 36,
                      border: '1px solid',
                      borderColor: 'divider',
                      bgcolor: '#fff',
                      '&:hover': {
                        bgcolor: '#F1F5F7',
                      },
                    } }
                  >
                    <CloseIcon fontSize="small" />
                  </IconButton>
                  <Box
                    component="ul"
                    sx={ {
                      width: '100%',
                      m: 0,
                      p: 0,
                      listStyle: 'none',
                      display: 'grid',
                      gap: 1.2,
                    } }
                  >
                    { activeMainListTab.links.map((link) => (
                      <Box component="li" key={ link.label }>
                        <Button
                          component="a"
                          href={ link.href }
                          target={ link.external ? '_blank' : undefined }
                          rel={ link.external ? 'noreferrer' : undefined }
                          fullWidth
                          endIcon={ <ArrowForwardIcon /> }
                          sx={ {
                            justifyContent: 'space-between',
                            minHeight: 54,
                            px: { xs: 1.8, md: 2.2 },
                            borderRadius: '8px',
                            color: 'text.primary',
                            bgcolor: 'background.paper',
                            border: '1px solid',
                            borderColor: 'divider',
                            fontSize: { xs: 15, md: 17 },
                            fontWeight: 800,
                            textAlign: 'left',
                            '&:hover': {
                              color: '#fff',
                              bgcolor: 'secondary.dark',
                              borderColor: 'secondary.dark',
                            },
                          } }
                        >
                          { link.label }
                        </Button>
                      </Box>
                    )) }
                  </Box>
                </Box>
                </Box>
              ) : null }
            </Box>
          </Box>
        </Container>
      </AppBar>

      <Box
        component="main"
        sx={ {
          position: 'relative',
          overflow: 'hidden',
        } }
      >
        <Box
          onMouseEnter={ () => setIsKakaoCtaHovered(true) }
          onMouseLeave={ () => setIsKakaoCtaHovered(false) }
          onFocus={ () => setIsKakaoCtaHovered(true) }
          onBlur={ () => setIsKakaoCtaHovered(false) }
          sx={ {
            position: 'fixed',
            right: { xs: 16, md: 28 },
            bottom: { xs: 16, md: 28 },
            zIndex: 20,
            display: 'flex',
            alignItems: 'center',
          } }
        >
          <Box
            className="kakao-tooltip"
            sx={ {
              position: 'absolute',
              right: { xs: 74, md: 86 },
              top: '50%',
              opacity: isKakaoCtaHovered ? 1 : 0,
              pointerEvents: 'none',
              transform: isKakaoCtaHovered
                ? 'translate(-10px, calc(-50% - 20px)) scale(1)'
                : 'translate(4px, calc(-50% - 20px)) scale(0.96)',
              transformOrigin: 'right center',
              transition: 'opacity 180ms ease, transform 180ms ease',
              px: 2,
              py: 1.2,
              borderRadius: '14px',
              bgcolor: '#4B2E1E',
              color: '#FFE500',
              boxShadow: '0 16px 34px rgba(0,0,0,0.24)',
              whiteSpace: 'nowrap',
              fontSize: { xs: 13, md: 15 },
              fontWeight: 900,
              '&::after': {
                content: '""',
                position: 'absolute',
                right: -8,
                top: '50%',
                width: 0,
                height: 0,
                borderTop: '8px solid transparent',
                borderBottom: '8px solid transparent',
                borderLeft: '8px solid #4B2E1E',
                transform: 'translateY(-50%)',
              },
            } }
          >
            바로 1:1로 카카오톡 상담하기
          </Box>
          <Box
            component="a"
            href="#contact"
            aria-label="카카오톡 상담하기"
            sx={ {
              width: { xs: 62, md: 72 },
              height: { xs: 62, md: 72 },
              borderRadius: '50%',
              bgcolor: '#FFE500',
              color: '#4B2E1E',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              textDecoration: 'none',
              position: 'relative',
              boxShadow:
                'inset 0 5px 0 rgba(255,255,255,0.48), inset 0 -8px 0 rgba(0,0,0,0.10), 0 12px 0 rgba(0,0,0,0.18), 0 24px 36px rgba(0,0,0,0.26)',
              transition: 'transform 160ms ease, box-shadow 160ms ease',
              '&::after': {
                content: '""',
                position: 'absolute',
                left: 11,
                bottom: 4,
                width: 16,
                height: 16,
                bgcolor: '#4B2E1E',
                transform: 'rotate(45deg)',
                borderRadius: '2px',
                zIndex: 0,
              },
              '&:hover': {
                transform: 'translateY(-4px)',
                boxShadow:
                  'inset 0 5px 0 rgba(255,255,255,0.55), inset 0 -9px 0 rgba(0,0,0,0.12), 0 16px 0 rgba(0,0,0,0.18), 0 30px 42px rgba(0,0,0,0.30)',
              },
              '&:active': {
                transform: 'translateY(5px)',
                boxShadow:
                  'inset 0 3px 0 rgba(255,255,255,0.42), inset 0 5px 12px rgba(0,0,0,0.18), 0 6px 0 rgba(0,0,0,0.16), 0 12px 18px rgba(0,0,0,0.22)',
              },
            } }
          >
            <Typography
              sx={ {
                position: 'relative',
                zIndex: 1,
                fontSize: { xs: 28, md: 32 },
                fontWeight: 950,
                letterSpacing: 0,
                lineHeight: 1,
              } }
            >
              Ch
            </Typography>
          </Box>
        </Box>
        <Box
          sx={ {
            position: 'relative',
            minHeight: { xs: 'auto', md: 'calc(100vh - 76px)' },
            display: 'flex',
            alignItems: 'center',
            backgroundImage: `url(${activeHeroSlide === 0 ? heroBackgroundImage : consultingBackgroundImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            py: { xs: 8, md: 10 },
            '&::before': {
              content: '""',
              position: 'absolute',
              inset: 0,
              background: activeHeroSlide === 0
                ? 'linear-gradient(90deg, rgba(255,255,255,0.82) 0%, rgba(255,255,255,0.58) 43%, rgba(255,255,255,0.14) 100%)'
                : 'linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0) 42%, rgba(255,255,255,0) 100%)',
            },
          } }
        >
          <Container maxWidth="xl" sx={ { position: 'relative' } }>
            { activeHeroSlide === 0 ? (
            <Grid container spacing={ { xs: 5, md: 8 } } alignItems="stretch">
              <Grid size={ { xs: 12, md: 7 } }>
                <Stack spacing={ 3.2 }>
                  <Chip
                    label="기업과 근로자를 연결하는 건강검진 허브"
                    color="secondary"
                    sx={ {
                      alignSelf: 'flex-start',
                      fontWeight: 800,
                      height: 42,
                      bgcolor: '#F5A623',
                      '& .MuiChip-label': {
                        bgcolor: 'transparent',
                        color: '#FAFAF8',
                      },
                    } }
                  />
                  <Typography
                    variant="h1"
                    sx={ {
                      fontSize: { xs: 44, sm: 58, md: 82 },
                      maxWidth: 900,
                      filter: 'none',
                      backdropFilter: 'none',
                      textShadow: 'none',
                    } }
                  >
                    사업장과 현장으로
                    <Box component="span" sx={ { display: 'block', mt: '10px' } }>
                      찾아가는
                    </Box>
                    <Box component="span" sx={ { color: 'primary.main', display: 'block', mt: '15px' } }>
                      스마트 건강검진
                    </Box>
                  </Typography>
                  <Typography
                    variant="body1"
                    color="text.secondary"
                    sx={ { maxWidth: 720, fontSize: { xs: 17, md: 20 } } }
                  >
                    배치전배치후검진부터 특수건강검진, 출장검진까지 기업 담당자와
                    <Box component="span" sx={ { display: 'block' } }>
                      개인 근로자의 검진 과정을 빠르고 명확하게 연결합니다.
                    </Box>
                  </Typography>
                  <Stack direction={ { xs: 'column', sm: 'row' } } spacing={ 1.4 }>
                    <Button variant="contained" color="primary" size="large" endIcon={ <ArrowForwardIcon /> }>
                      기업 출장·특수검진 문의
                    </Button>
                    <Button variant="outlined" color="primary" size="large" endIcon={ <ArrowForwardIcon /> }>
                      개인 배치전검진 예약
                    </Button>
                  </Stack>
                </Stack>
              </Grid>

              <Grid
                size={ { xs: 12, md: 5 } }
                sx={ {
                  display: 'flex',
                  alignItems: 'flex-end',
                } }
              >
                <Stack spacing={ 1.25 } sx={ { width: '100%', maxWidth: 520, ml: { md: 'auto' } } }>
                  { [
                    ['기업 문의', '일정·인원·항목 조율', 'primary.main'],
                    ['개인 검진', '준비물·금식·결과 확인', 'secondary.main'],
                    ['특수검진', '대상 여부와 상담 연결', 'warning.main'],
                  ].map(([title, description, color]) => (
                    <Button
                      key={ title }
                      variant="outlined"
                      color="primary"
                      endIcon={ <ArrowForwardIcon /> }
                      sx={ {
                        justifyContent: 'space-between',
                        height: { xs: 58, md: 40 },
                        minHeight: { xs: 58, md: 40 },
                        px: { xs: 2, md: 2.2 },
                        py: 0,
                        borderRadius: '8px',
                        bgcolor: 'rgba(255,255,255,0.92)',
                        borderColor: 'rgba(0,93,155,0.22)',
                        textAlign: 'left',
                        '&:hover': {
                          bgcolor: '#fff',
                          borderColor: color,
                        },
                      } }
                    >
                      <Stack direction="row" spacing={ 1.2 } alignItems="center" sx={ { minWidth: 0 } }>
                        <Box sx={ { width: 7, height: { xs: 34, md: 28 }, borderRadius: 99, bgcolor: color, flexShrink: 0 } } />
                        <Box sx={ { minWidth: 0 } }>
                          <Typography sx={ { fontWeight: 900, lineHeight: 1.1 } }>
                            { title }
                          </Typography>
                          <Typography color="text.secondary" sx={ { fontSize: 12, lineHeight: 1.1 } }>
                            { description }
                          </Typography>
                        </Box>
                      </Stack>
                    </Button>
                  )) }
                </Stack>
              </Grid>
            </Grid>
            ) : (
              <Box
                sx={ {
                  maxWidth: 840,
                  py: { xs: 2, md: 5 },
                  px: { xs: 2, md: 3 },
                  borderRadius: '8px',
                } }
              >
                <Stack spacing={ 2.2 } alignItems="flex-start">
                  <Stack direction="row" spacing={ 1.4 } alignItems="center">
                    <Box
                      sx={ {
                        width: 60,
                        height: 60,
                        borderRadius: '50%',
                        bgcolor: '#fff',
                        border: '3px solid #4CB7E8',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'primary.main',
                        fontWeight: 950,
                        fontSize: 24,
                      } }
                    >
                      SH
                    </Box>
                    <Box
                      sx={ {
                        px: { xs: 1.4, md: 1.8 },
                        py: { xs: 0.9, md: 1.1 },
                        border: '2px solid rgba(255,255,255,0.92)',
                        borderRadius: '14px',
                        bgcolor: 'rgba(255,255,255,0.72)',
                        boxShadow: '0 2px 0 rgba(0,93,155,0.18), inset 0 1px 0 rgba(255,255,255,0.86)',
                      } }
                    >
                      <Typography sx={ { color: 'text.secondary', fontWeight: 800, fontSize: 15 } }>
                        의료법인 풍진의료재단
                      </Typography>
                      <Typography
                        sx={ {
                          color: '#00A6D6',
                          fontWeight: 950,
                          fontSize: { xs: 28, md: 40 },
                          lineHeight: 1.05,
                          WebkitTextStroke: '0.6px rgba(255,255,255,0.95)',
                          textShadow: '0 1px 0 #fff, 0 3px 0 rgba(0,93,155,0.12)',
                        } }
                      >
                        스마트허브병원
                      </Typography>
                    </Box>
                  </Stack>

                  <Typography
                    variant="h1"
                    sx={ {
                      color: '#101010',
                      WebkitTextStroke: '0.9px rgba(255,255,255,0.96)',
                      textShadow: '0 1px 0 #fff, 0 4px 0 rgba(0,0,0,0.12), 0 8px 18px rgba(0,0,0,0.18)',
                      fontSize: { xs: 42, sm: 58, md: 78 },
                      lineHeight: 1.08,
                      fontWeight: 950,
                    } }
                  >
                    내과·외과 진료/건강검진
                  </Typography>

                  <Typography
                    sx={ {
                      px: { xs: 1.6, md: 2.4 },
                      py: { xs: 1, md: 1.2 },
                      bgcolor: '#FFB000',
                      color: '#fff',
                      borderRadius: '6px',
                      border: '2px solid rgba(255,255,255,0.88)',
                      boxShadow: '0 4px 0 rgba(172,107,0,0.26), inset 0 1px 0 rgba(255,255,255,0.32)',
                      textShadow: '0 1px 0 rgba(0,0,0,0.16)',
                      fontSize: { xs: 24, md: 38 },
                      fontWeight: 950,
                      lineHeight: 1.15,
                    } }
                  >
                    건설현장, 산업체, 학교 출장 건강검진
                  </Typography>

                  <Box>
                    <Typography
                      sx={ {
                        color: '#333',
                        WebkitTextStroke: '0.7px rgba(255,255,255,0.96)',
                        textShadow: '0 1px 0 #fff, 0 3px 0 rgba(0,0,0,0.10), 0 7px 14px rgba(0,0,0,0.14)',
                        fontSize: { xs: 30, md: 48 },
                        fontWeight: 900,
                        lineHeight: 1.2,
                      } }
                    >
                      국가/암/종합 건강검진센터
                    </Typography>
                    <Typography
                      sx={ {
                        color: '#555',
                        WebkitTextStroke: '0.45px rgba(255,255,255,0.96)',
                        textShadow: '0 1px 0 #fff, 0 2px 0 rgba(0,0,0,0.08), 0 5px 11px rgba(0,0,0,0.12)',
                        fontSize: { xs: 19, md: 28 },
                        fontWeight: 800,
                        mt: 0.6,
                      } }
                    >
                      여의사 검진, 당일검진 가능(월~토)
                    </Typography>
                  </Box>

                  <Typography
                    sx={ {
                      color: '#15AFA5',
                      WebkitTextStroke: '0.65px rgba(255,255,255,0.96)',
                      textShadow: '0 1px 0 #fff, 0 3px 0 rgba(0,93,88,0.12), 0 7px 14px rgba(0,0,0,0.14)',
                      fontSize: { xs: 24, md: 38 },
                      fontWeight: 950,
                      lineHeight: 1.18,
                    } }
                  >
                    위, 대장 내시경/128채널 CT 검사장비 운영
                  </Typography>
                </Stack>
              </Box>
            ) }

            <Stack
              direction="row"
              spacing={ 1.1 }
              alignItems="center"
              sx={ {
                position: 'absolute',
                left: { xs: 24, md: 24 },
                bottom: { xs: -42, md: -46 },
                p: 0.8,
                borderRadius: 99,
                bgcolor: 'rgba(255,255,255,0.88)',
                backdropFilter: 'blur(12px)',
                boxShadow: '0 16px 34px rgba(0,56,96,0.18), inset 0 1px 0 rgba(255,255,255,0.92)',
              } }
            >
              { [0, 1].map((slideIndex) => (
                <Box
                  key={ slideIndex }
                  component="button"
                  type="button"
                  aria-label={ `메인 슬라이드 ${slideIndex + 1}` }
                  onClick={ () => setActiveHeroSlide(slideIndex) }
                  sx={ {
                    width: activeHeroSlide === slideIndex ? 52 : 14,
                    height: 14,
                    borderRadius: 99,
                    border: 0,
                    bgcolor: activeHeroSlide === slideIndex ? '#005D9B' : 'rgba(0,93,155,0.24)',
                    cursor: 'pointer',
                    boxShadow: activeHeroSlide === slideIndex
                      ? 'inset 0 1px 0 rgba(255,255,255,0.42), 0 4px 10px rgba(0,93,155,0.28)'
                      : 'none',
                    transition: 'width 180ms ease, background-color 180ms ease, transform 180ms ease, box-shadow 180ms ease',
                    '&:hover': {
                      transform: 'translateY(-1px)',
                      bgcolor: activeHeroSlide === slideIndex ? '#005D9B' : 'rgba(0,93,155,0.40)',
                    },
                  } }
                />
              )) }
            </Stack>
          </Container>
        </Box>

        <Box
          sx={ {
            bgcolor: '#FAFAF8',
            px: { xs: 2, md: 3 },
            pt: { xs: 3, md: 4 },
          } }
        >
          <Container maxWidth="xl" disableGutters>
            <Box
              sx={ {
                display: 'grid',
                gridTemplateColumns: { xs: '1fr', lg: '1.15fr 1fr 1fr' },
                gap: { xs: 1.5, md: 0 },
                overflow: 'hidden',
                borderRadius: '14px',
                border: '1px solid rgba(0,93,155,0.18)',
                bgcolor: '#fff',
                boxShadow:
                  '0 12px 0 rgba(0,93,155,0.10), 0 28px 52px rgba(18,49,74,0.12), inset 0 1px 0 rgba(255,255,255,0.95)',
              } }
            >
              <Box
                sx={ {
                  position: 'relative',
                  p: { xs: 2.4, md: 3 },
                  backgroundImage: 'linear-gradient(135deg, rgba(0,93,155,0.08), rgba(140,198,63,0.10))',
                  borderRight: { lg: '1px solid rgba(0,93,155,0.14)' },
                } }
              >
                <Stack spacing={ 2 }>
                  <Stack direction="row" spacing={ 1 } flexWrap="wrap" useFlexGap>
                    { ['도수치료가능', '외과진료', '내과진료'].map((label) => (
                      <Chip
                        key={ label }
                        label={ label }
                        size="small"
                        sx={ {
                          height: 30,
                          borderRadius: '7px',
                          bgcolor: '#005D9B',
                          color: '#fff',
                          fontWeight: 900,
                          boxShadow: '0 3px 0 rgba(0,56,96,0.20)',
                          '& .MuiChip-label': {
                            px: 1.2,
                            bgcolor: 'transparent',
                            color: 'inherit',
                          },
                        } }
                      />
                    )) }
                  </Stack>
                  <Stack direction="row" spacing={ 1.5 } alignItems="center">
                    <Box
                      sx={ {
                        width: 48,
                        height: 48,
                        borderRadius: '12px',
                        display: 'grid',
                        placeItems: 'center',
                        bgcolor: 'secondary.main',
                        color: '#fff',
                        boxShadow: '0 5px 0 rgba(172,107,0,0.22)',
                      } }
                    >
                      <MedicalServicesOutlinedIcon />
                    </Box>
                    <Typography
                      variant="h4"
                      sx={ {
                        fontSize: { xs: 25, md: 34 },
                        fontWeight: 950,
                        lineHeight: 1.08,
                        color: '#101010',
                        textShadow: '0 1px 0 #fff, 0 3px 0 rgba(0,93,155,0.12)',
                      } }
                    >
                      대학 교수급 외래진료
                    </Typography>
                  </Stack>
                </Stack>
              </Box>

              <Box
                sx={ {
                  p: { xs: 2.4, md: 3 },
                  borderRight: { lg: '1px solid rgba(0,93,155,0.14)' },
                  borderTop: { xs: '1px solid rgba(0,93,155,0.10)', lg: 0 },
                } }
              >
                <Stack direction="row" spacing={ 1.6 } alignItems="flex-start">
                  <Box
                    sx={ {
                      width: 44,
                      height: 44,
                      borderRadius: '11px',
                      display: 'grid',
                      placeItems: 'center',
                      bgcolor: 'rgba(0,93,155,0.10)',
                      color: 'primary.main',
                    } }
                  >
                    <ScheduleOutlinedIcon />
                  </Box>
                  <Box>
                    <Typography sx={ { fontSize: 14, fontWeight: 900, color: 'primary.main', mb: 0.8 } }>
                      진료시간
                    </Typography>
                    { ['평일 08:00-17:00', '토요일 08:00-12:00', '점심시간 12:00-13:00'].map((time) => (
                      <Typography key={ time } sx={ { fontSize: { xs: 16, md: 17 }, fontWeight: 800, lineHeight: 1.65 } }>
                        { time }
                      </Typography>
                    )) }
                  </Box>
                </Stack>
              </Box>

              <Box
                sx={ {
                  position: 'relative',
                  p: { xs: 2.4, md: 3 },
                  pb: { xs: 7.2, md: 6.8 },
                  borderTop: { xs: '1px solid rgba(0,93,155,0.10)', lg: 0 },
                } }
              >
                <Stack direction="row" spacing={ 1.6 } alignItems="flex-start">
                  <Box
                    sx={ {
                      width: 44,
                      height: 44,
                      borderRadius: '11px',
                      display: 'grid',
                      placeItems: 'center',
                      bgcolor: 'rgba(140,198,63,0.16)',
                      color: '#4B8B22',
                    } }
                  >
                    <LocationOnOutlinedIcon />
                  </Box>
                  <Box>
                    <Typography sx={ { fontSize: 14, fontWeight: 900, color: '#4B8B22', mb: 0.8 } }>
                      오시는 길
                    </Typography>
                    <Typography sx={ { fontSize: { xs: 16, md: 17 }, fontWeight: 850, lineHeight: 1.55 } }>
                      경기도 시흥시 공단 1대로 263 1층
                    </Typography>
                    <Typography sx={ { mt: 0.6, color: 'text.secondary', fontWeight: 800 } }>
                      무료주차 가능
                    </Typography>
                  </Box>
                </Stack>
                <Box
                  component="a"
                  href="#support-map"
                  sx={ {
                    position: 'absolute',
                    right: { xs: 18, md: 24 },
                    bottom: { xs: 18, md: 20 },
                    color: 'primary.dark',
                    fontSize: 14,
                    fontWeight: 950,
                    lineHeight: 1,
                    textDecoration: 'none',
                    '&:hover .mapCallout': {
                      opacity: 1,
                      transform: 'translate(-50%, -10px)',
                      animation: 'mapCalloutBlink 900ms step-end 5',
                    },
                    '&:hover .mapNavLabel': {
                      color: 'primary.main',
                      borderColor: 'primary.main',
                    },
                    '@keyframes mapCalloutBlink': {
                      '0%, 100%': { opacity: 1 },
                      '50%': { opacity: 0.24 },
                    },
                  } }
                >
                  <Stack
                    className="mapCallout"
                    spacing={ 0.2 }
                    alignItems="center"
                    sx={ {
                      position: 'absolute',
                      left: '50%',
                      bottom: '100%',
                      width: 'max-content',
                      maxWidth: 220,
                      px: 1.4,
                      py: 1,
                      borderRadius: '12px',
                      bgcolor: '#fff',
                      border: '1px solid rgba(0,93,155,0.20)',
                      boxShadow: '0 12px 24px rgba(0,93,155,0.16)',
                      opacity: 0,
                      pointerEvents: 'none',
                      transform: 'translate(-50%, -4px)',
                      transition: 'opacity 140ms ease, transform 140ms ease',
                    } }
                  >
                    <Typography sx={ { fontSize: 13, fontWeight: 950, color: 'primary.dark', lineHeight: 1.25 } }>
                      허브스마트병원 위치확인하기
                    </Typography>
                    <KeyboardArrowDownIcon sx={ { color: 'primary.main', fontSize: 19 } } />
                  </Stack>
                  <Typography
                    className="mapNavLabel"
                    component="span"
                    sx={ {
                      display: 'inline-flex',
                      alignItems: 'center',
                      px: 1.2,
                      py: 0.8,
                      borderRadius: '999px',
                      border: '1px solid rgba(0,93,155,0.20)',
                      bgcolor: 'rgba(255,255,255,0.82)',
                      boxShadow: '0 6px 14px rgba(16,32,42,0.08)',
                      transition: 'color 140ms ease, border-color 140ms ease',
                    } }
                  >
                    지도 네비게이션
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Container>
        </Box>

        <Box
          id="main_con01_wrap"
          sx={ {
            bgcolor: '#FAFAF8',
            px: { xs: 2, md: 3 },
            pt: { xs: 2, md: 3 },
            pb: '10px',
          } }
        >
          <Container maxWidth="xl" disableGutters>
            <Box
              id="main_con01"
              sx={ {
                display: 'grid',
                gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', lg: 'repeat(4, 1fr)' },
                bgcolor: '#fff',
                border: '1px solid rgba(0, 93, 155, 0.16)',
                borderRadius: '8px',
                overflow: 'hidden',
                boxShadow:
                  'inset 0 1px 0 rgba(255,255,255,0.9), 0 2px 0 rgba(0,93,155,0.18)',
              } }
            >
              { mainConBoxes.map((box) => {
                const BoxIcon = box.icon;

                return (
                  <Box
                    key={ box.className }
                    className={ `box ${box.className}` }
                    sx={ {
                      position: 'relative',
                      minHeight: { xs: 260, md: 300 },
                      p: { xs: 2.4, md: 3 },
                      pr: { xs: 9, md: 10.5 },
                      pb: { xs: 12, md: 13 },
                      borderRight: { lg: '1px solid rgba(0,0,0,0.08)' },
                      borderBottom: { xs: '1px solid rgba(0,0,0,0.08)', sm: '1px solid rgba(0,0,0,0.08)', lg: 0 },
                      '&:nth-of-type(2n)': {
                        borderRight: { sm: 0, lg: '1px solid rgba(0,0,0,0.08)' },
                      },
                      '&:last-of-type': {
                        borderRight: 0,
                        borderBottom: 0,
                      },
                    } }
                  >
                  <Box component="p" className="tit" sx={ { m: 0, mb: 2.2 } }>
                    <Typography
                      component="span"
                      sx={ {
                        display: 'block',
                        color: 'primary.main',
                        fontSize: { xs: 23, md: 27 },
                        fontWeight: 950,
                        lineHeight: 1.2,
                      } }
                    >
                      { box.title }
                    </Typography>
                  </Box>

                  { box.links ? (
                    <Box
                      component="ul"
                      sx={ {
                        m: 0,
                        p: 0,
                        listStyle: 'none',
                        display: 'grid',
                        gap: 1,
                      } }
                    >
                      { box.links.map((link) => (
                        <Box component="li" key={ link.label } sx={ { minWidth: 0 } }>
                          <Button
                            component="a"
                            href={ link.href }
                            target={ link.external ? '_blank' : undefined }
                            rel={ link.external ? 'noopener' : undefined }
                            className="bt_view"
                            variant="outlined"
                            color="primary"
                            disableElevation
                            endIcon={ <ArrowForwardIcon /> }
                            sx={ {
                              justifyContent: 'space-between',
                              width: '100%',
                              minHeight: 38,
                              px: 1.35,
                              fontWeight: 900,
                            } }
                          >
                            { link.label }
                          </Button>
                        </Box>
                      )) }
                    </Box>
                  ) : (
                    <Button
                      component="a"
                      href={ box.viewHref }
                      className="bt_view"
                      variant="outlined"
                      color="primary"
                      disableElevation
                      endIcon={ <ArrowForwardIcon /> }
                      sx={ { mt: 1 } }
                    >
                      자세히보기
                    </Button>
                  ) }
                  <Box
                    aria-hidden="true"
                    sx={ {
                      position: 'absolute',
                      right: { xs: 20, md: 24 },
                      bottom: { xs: 8, md: 14 },
                      width: { xs: 68, md: 80 },
                      height: { xs: 68, md: 80 },
                      borderRadius: '18px',
                      bgcolor: 'transparent',
                      color: 'primary.main',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      border: 0,
                      filter: 'none',
                      backdropFilter: 'none',
                      boxShadow:
                        'inset 0 1px 0 rgba(255,255,255,0.72), 0 3px 0 rgba(120,120,120,0.16), 0 12px 22px rgba(80,80,80,0.12)',
                    } }
                  >
                    <BoxIcon sx={ { fontSize: { xs: 37, md: 44 } } } />
                  </Box>
                </Box>
                );
              }) }
            </Box>
          </Container>
        </Box>

        <Box
          id="main_con02_wrap"
          sx={ {
            bgcolor: '#FAFAF8',
            px: { xs: 2, md: 3 },
            pt: 0,
            pb: { xs: 4, md: 6 },
          } }
        >
          <Container maxWidth="xl" disableGutters>
            <Grid
              id="main_con02"
              container
              spacing={ 0 }
              alignItems="stretch"
            >
              <Grid
                size={ { xs: 12, md: 3 } }
              >
                <Box
                  id="jsMainZone01"
                  className="popzw pop01"
                  sx={ {
                    height: '100%',
                    minHeight: 330,
                    bgcolor: '#fff',
                    border: '1px solid rgba(0, 93, 155, 0.16)',
                    borderRadius: '8px',
                    p: 2.2,
                    position: 'relative',
                    boxShadow:
                      'inset 0 1px 0 rgba(255,255,255,0.9), 0 2px 0 rgba(0,93,155,0.18)',
                  } }
                >
                  <Stack direction="row" justifyContent="space-between" alignItems="center" sx={ { mb: 1.6 } }>
                    <Typography sx={ { fontSize: 20, fontWeight: 950 } }>팝업존</Typography>
                    <Box component="p" className="play" sx={ { m: 0 } }>
                      <Button
                        size="small"
                        className={ isPopupPlaying ? 'jsStop' : 'jsStart' }
                        onClick={ () => setIsPopupPlaying((current) => !current) }
                        sx={ { minWidth: 42, fontWeight: 900 } }
                      >
                        { isPopupPlaying ? 'STOP' : 'PLAY' }
                      </Button>
                    </Box>
                  </Stack>

                  <PopupCarousel
                    items={ popupZoneOne }
                    activeIndex={ activePopupOne }
                    onChange={ setActivePopupOne }
                    variant="primary"
                  />
                </Box>
              </Grid>

              <Grid
                size={ { xs: 12, md: 6 } }
              >
                <Box
                  className="main_board"
                  sx={ {
                    height: '100%',
                    minHeight: 330,
                    bgcolor: '#fff',
                    border: '1px solid rgba(0, 93, 155, 0.16)',
                    borderRadius: '8px',
                    p: { xs: 2, md: 2.6 },
                    boxShadow:
                      'inset 0 1px 0 rgba(255,255,255,0.9), 0 2px 0 rgba(0,93,155,0.18)',
                  } }
                >
                  <Stack component="ul" direction="row" spacing={ 1 } sx={ { m: 0, p: 0, listStyle: 'none', mb: 2.2, flexWrap: 'wrap' } }>
                    { boardTabs.map((tab, index) => (
                      <Box component="li" key={ tab.label }>
                        <Button
                          id={ `ntab${index + 1}` }
                          onMouseEnter={ () => setActiveBoardTab(index) }
                          onFocus={ () => setActiveBoardTab(index) }
                          className={ activeBoardTab === index ? 'on' : '' }
                          sx={ {
                            minHeight: 38,
                            px: 1.6,
                            borderRadius: '8px',
                            color: activeBoardTab === index ? '#fff' : 'text.primary',
                            bgcolor: activeBoardTab === index ? 'primary.main' : 'transparent',
                            fontWeight: 900,
                            '&:hover': {
                              color: '#fff',
                              bgcolor: 'primary.main',
                            },
                          } }
                        >
                          { tab.label }
                        </Button>
                      </Box>
                    )) }
                  </Stack>

                  <Box id={ `news_list${activeBoardTab + 1}` }>
                    <Box component="ul" sx={ { m: 0, p: 0, listStyle: 'none', display: 'grid', gap: 1.15 } }>
                      { activeBoard.items.map(([title, date]) => (
                        <Box
                          component="li"
                          key={ title }
                          sx={ {
                            display: 'grid',
                            gridTemplateColumns: { xs: '1fr', sm: '1fr auto' },
                            gap: 1,
                            alignItems: 'center',
                            py: 0.9,
                            borderBottom: '1px solid rgba(0,0,0,0.07)',
                          } }
                        >
                          <Typography
                            component="a"
                            href={ activeBoard.moreHref }
                            sx={ {
                              color: 'text.primary',
                              fontWeight: 750,
                              textDecoration: 'none',
                              overflow: 'hidden',
                              textOverflow: 'ellipsis',
                              whiteSpace: 'nowrap',
                              '&:hover': { color: 'primary.main' },
                            } }
                          >
                            { title }
                          </Typography>
                          <Typography component="span" className="date" sx={ { color: 'text.secondary', fontSize: 13, fontWeight: 700 } }>
                            { date }
                          </Typography>
                        </Box>
                      )) }
                    </Box>
                    <Box component="span" className="bt_more" sx={ { display: 'flex', justifyContent: 'flex-end', mt: 1.8 } }>
                      <Button component="a" href={ activeBoard.moreHref } size="small" endIcon={ <ArrowForwardIcon /> } sx={ { fontWeight: 900 } }>
                        더보기
                      </Button>
                    </Box>
                  </Box>
                </Box>
              </Grid>

              <Grid
                size={ { xs: 12, md: 3 } }
              >
                <Box
                  id="jsMainZone02"
                  className="popzw pop02"
                  data-testid="most-efficient-popup"
                  sx={ {
                    height: '100%',
                    minHeight: 330,
                    bgcolor: '#fff',
                    border: '1px solid rgba(0, 93, 155, 0.16)',
                    borderRadius: '8px',
                    p: 2.2,
                    boxShadow:
                      'inset 0 1px 0 rgba(255,255,255,0.9), 0 2px 0 rgba(0,93,155,0.18)',
                  } }
                >
                  <Stack direction="row" justifyContent="space-between" alignItems="center" sx={ { mb: 1.6 } }>
                    <Typography sx={ { fontSize: 20, fontWeight: 950 } }>검진 안내</Typography>
                    <Box component="p" className="play" sx={ { m: 0 } }>
                      <Button
                        size="small"
                        className={ isPopupPlaying ? 'jsStop' : 'jsStart' }
                        onClick={ () => setIsPopupPlaying((current) => !current) }
                        sx={ { minWidth: 42, fontWeight: 900 } }
                      >
                        { isPopupPlaying ? 'STOP' : 'PLAY' }
                      </Button>
                    </Box>
                  </Stack>

                  <PopupCarousel
                    items={ popupZoneTwo }
                    activeIndex={ activePopupTwo }
                    onChange={ setActivePopupTwo }
                    variant="warm"
                  />
                </Box>
              </Grid>
            </Grid>
          </Container>
        </Box>

        <Container maxWidth="xl" sx={ { py: { xs: 8, md: 12 } } }>
          <Grid container spacing={ { xs: 4, md: 6 } } alignItems="stretch">
            <Grid size={ { xs: 12, md: 5 } }>
              <SectionHeading
                eyebrow="FIND YOUR PATH"
                title={
                  <>
                    <Box
                      component="span"
                      sx={ {
                        display: 'block',
                        fontSize: { xs: 28, md: 42 },
                        fontWeight: 900,
                        lineHeight: 1.04,
                        color: 'primary.dark',
                        textShadow:
                          '0 1px 0 rgba(255,255,255,0.8), 0 3px 0 rgba(0,93,155,0.14)',
                      } }
                    >
                      허브스마트병원은
                    </Box>
                    <Box component="span" sx={ { display: 'block' } }>
                      서비스보다 사용자의 상황을
                    </Box>
                    <Box component="span" sx={ { display: 'block' } }>
                      먼저 묻습니다.
                    </Box>
                  </>
                }
                description="처음 방문한 사용자도 자신의 검진 목적을 빠르게 선택할 수 있도록 진입 경로를 분리합니다."
              />
            </Grid>
            <Grid size={ { xs: 12, md: 7 } }>
              <Box
                sx={ {
                  display: 'grid',
                  gap: 1.3,
                } }
              >
                { situationCards.map((card, index) => {
                  const Icon = card.icon;
                  const isActive = activeSituationPath === index;
                  return (
                    <Box
                      key={ card.title }
                      component="button"
                      type="button"
                      onClick={ () => setActiveSituationPath(index) }
                      aria-expanded={ isActive }
                      sx={ {
                        width: '100%',
                        p: { xs: 1.6, md: 1.9 },
                        border: '1px solid',
                        borderColor: isActive ? 'primary.main' : 'divider',
                        borderRadius: '14px',
                        bgcolor: isActive ? '#fff' : 'background.paper',
                        textAlign: 'left',
                        cursor: 'pointer',
                        boxShadow: isActive
                          ? '0 8px 0 rgba(0,93,155,0.10)'
                          : '0 2px 0 rgba(18,49,74,0.06)',
                        transition: 'transform 180ms ease, background-color 180ms ease, box-shadow 180ms ease, border-color 180ms ease',
                        '&:hover': {
                          transform: 'translateY(-2px)',
                          bgcolor: '#fff',
                          boxShadow: isActive ? '0 8px 0 rgba(0,93,155,0.10)' : '0 4px 0 rgba(18,49,74,0.08)',
                        },
                      } }
                    >
                      <Stack spacing={ isActive ? 1.8 : 0 }>
                        <Stack direction="row" spacing={ 1.4 } alignItems="center" justifyContent="space-between">
                          <Box
                            sx={ { display: 'flex', alignItems: 'center', gap: 1.4, minWidth: 0 } }
                          >
                            <Typography sx={ { color: card.color, fontWeight: 950, fontSize: 14, flexShrink: 0 } }>
                              PATH { String(index + 1).padStart(2, '0') }
                            </Typography>
                            <Typography
                              variant="h5"
                              sx={ {
                                fontWeight: 850,
                                fontSize: { xs: 18, md: 21 },
                                lineHeight: 1.25,
                              } }
                            >
                              { card.title }
                            </Typography>
                          </Box>
                          <Icon sx={ { color: card.color, fontSize: 28, flexShrink: 0 } } />
                        </Stack>
                        { isActive ? (
                          <Box sx={ { pl: { xs: 0, md: 8.4 } } }>
                            <Typography color="text.secondary" sx={ { lineHeight: 1.65, mb: 1.2 } }>
                              { card.description }
                            </Typography>
                            <Button variant="text" endIcon={ <ArrowForwardIcon /> } sx={ { px: 0 } }>
                              바로 확인
                            </Button>
                          </Box>
                        ) : null }
                      </Stack>
                    </Box>
                  );
                }) }
              </Box>
            </Grid>
          </Grid>
        </Container>

        <Container maxWidth="xl" sx={ { py: { xs: 8, md: 12 } } }>
          <SectionHeading
            eyebrow="PROCESS"
            title={
              <>
                <Box
                  component="span"
                  sx={ {
                    display: 'block',
                    fontSize: { xs: 28, md: 42 },
                    fontWeight: 900,
                    lineHeight: 1.04,
                    color: 'primary.dark',
                    textShadow:
                      '0 1px 0 rgba(255,255,255,0.8), 0 3px 0 rgba(0,93,155,0.14)',
                  } }
                >
                  허브스마트병원은
                </Box>
                <Box component="span" sx={ { display: 'block' } }>
                  절차를 먼저 보여주면
                </Box>
                <Box component="span" sx={ { display: 'block' } }>
                  검진 불안이 줄어듭니다
                </Box>
              </>
            }
            description="기업 담당자와 개인 근로자의 흐름을 전환해 보며, 각자에게 필요한 다음 단계를 확인합니다."
          />
          <Box sx={ { display: 'none' } }>
          <Box
            sx={ {
              display: 'inline-grid',
              gridTemplateColumns: '1fr 1fr',
              p: 0.5,
              mb: 4,
              borderRadius: '10px',
              bgcolor: 'rgba(0,93,155,0.08)',
              border: '1px solid rgba(0,93,155,0.16)',
            } }
          >
            { [
              ['enterprise', '기업 담당자'],
              ['personal', '개인 근로자'],
            ].map(([value, label]) => {
              const isSelected = activeFlow === value;

              return (
                <Button
                  key={ value }
                  onClick={ () => {
                    setActiveFlow(value);
                    setIsProcessExpanded(false);
                  } }
                  className="bt_view"
                  variant="outlined"
                  color="primary"
                  disableElevation
                  sx={ {
                    minWidth: { xs: 132, sm: 156 },
                    minHeight: 46,
                    bgcolor: isSelected ? 'rgba(0,93,155,0.08)' : '#fff',
                    fontWeight: 900,
                    '&:hover': {
                      bgcolor: 'rgba(0,93,155,0.08)',
                    },
                  } }
                >
                  { label }
                </Button>
              );
            }) }
          </Box>
          <ContentCarousel
            items={ activeSteps }
            isExpanded={ isProcessExpanded }
            onExpand={ () => setIsProcessExpanded(true) }
            buttonLabel="전체 절차 한눈에 보기"
            getLabel={ (step, index) => `${index + 1}. ${step}` }
            gridTemplateColumns={ { xs: '1fr', sm: 'repeat(2, minmax(0, 1fr))', md: 'repeat(5, minmax(0, 1fr))' } }
            renderItem={ (step, index) => (
              <>
                <Box
                  sx={ {
                    minHeight: 220,
                    height: '100%',
                    p: 2.5,
                    borderRadius: 3,
                    border: '1px solid',
                    borderColor: index === 0 ? 'primary.main' : 'divider',
                    bgcolor: index === 0 ? 'primary.light' : 'background.paper',
                  } }
                >
                  <Typography variant="h3" color="primary.main" sx={ { mb: 3 } }>
                    { String(index + 1).padStart(2, '0') }
                  </Typography>
                  <Typography variant="h6" sx={ { fontWeight: 850 } }>
                    { step }
                  </Typography>
                </Box>
              </>
            ) }
          />
          </Box>
          <Grid container spacing={ { xs: 2.5, md: 3 } }>
            { [
              {
                label: '기업 담당자',
                caption: '단체 일정과 현장 진행을 한 번에 조율합니다.',
                steps: processFlows.enterprise,
                accent: '#005D9B',
                soft: 'rgba(0,93,155,0.08)',
              },
              {
                label: '개인 근로자',
                caption: '준비부터 결과 확인까지 개인 흐름을 명확하게 안내합니다.',
                steps: processFlows.personal,
                accent: '#15AFA5',
                soft: 'rgba(21,175,165,0.10)',
              },
            ].map((flow) => (
              <Grid key={ flow.label } size={ { xs: 12, md: 6 } }>
                <Box
                  sx={ {
                    height: '100%',
                    p: { xs: 2.4, md: 3 },
                    borderRadius: '8px',
                    bgcolor: '#fff',
                    border: '1px solid rgba(0, 93, 155, 0.14)',
                    boxShadow: '0 14px 36px rgba(16, 32, 42, 0.08), inset 0 1px 0 rgba(255,255,255,0.96)',
                  } }
                >
                  <Stack spacing={ 2.4 }>
                    <Box>
                      <Typography sx={ { color: flow.accent, fontSize: 15, fontWeight: 950 } }>
                        { flow.label }
                      </Typography>
                      <Typography sx={ { mt: 0.7, color: 'text.secondary', fontSize: { xs: 15, md: 16 }, fontWeight: 700 } }>
                        { flow.caption }
                      </Typography>
                    </Box>
                    <Box component="ol" sx={ { m: 0, p: 0, listStyle: 'none', display: 'grid', gap: 1.2 } }>
                      { flow.steps.map((step, index) => {
                        const isActive = index === activeProcessStep;

                        return (
                          <Box
                            component="li"
                            key={ step }
                            sx={ {
                              display: 'grid',
                              gridTemplateColumns: '44px 1fr',
                              alignItems: 'center',
                              gap: 1.5,
                              minHeight: 64,
                              p: 1.2,
                              borderRadius: '8px',
                              bgcolor: isActive ? flow.soft : '#FAFAF8',
                              border: `1px solid ${isActive ? flow.accent : 'rgba(18,49,74,0.08)'}`,
                              boxShadow: isActive
                                ? `0 10px 24px ${flow.soft}, inset 0 1px 0 rgba(255,255,255,0.96)`
                                : '0 0 0 rgba(0,0,0,0)',
                              transform: isActive ? 'translateY(-2px)' : 'translateY(0)',
                              transition: 'background-color 260ms ease, border-color 260ms ease, box-shadow 260ms ease, transform 260ms ease',
                              '&:hover': {
                                bgcolor: flow.soft,
                                borderColor: flow.accent,
                                boxShadow: `0 10px 24px ${flow.soft}, inset 0 1px 0 rgba(255,255,255,0.96)`,
                                transform: 'translateY(-2px)',
                              },
                              '&:hover .process-step-number': {
                                bgcolor: flow.accent,
                                color: '#fff',
                                borderColor: flow.accent,
                              },
                            } }
                          >
                            <Box
                              className="process-step-number"
                              sx={ {
                                width: 44,
                                height: 44,
                                borderRadius: '8px',
                                bgcolor: isActive ? flow.accent : '#fff',
                                color: isActive ? '#fff' : flow.accent,
                                border: `1px solid ${flow.accent}`,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontSize: 15,
                                fontWeight: 950,
                                transition: 'background-color 260ms ease, color 260ms ease, border-color 260ms ease',
                              } }
                            >
                              { String(index + 1).padStart(2, '0') }
                            </Box>
                            <Typography sx={ { fontSize: { xs: 16, md: 17 }, fontWeight: 850, lineHeight: 1.3 } }>
                              { step }
                            </Typography>
                          </Box>
                        );
                      }) }
                    </Box>
                  </Stack>
                </Box>
              </Grid>
            )) }
          </Grid>
        </Container>

        <Container
          maxWidth="xl"
          sx={ {
            py: { xs: 8, md: 12 },
            my: { xs: 2, md: 4 },
          } }
        >
          <Grid container spacing={ { xs: 2.5, md: 4 } } alignItems="stretch">
            <Grid size={ { xs: 12, md: 6 } }>
              <Box
                sx={ {
                  position: 'relative',
                  overflow: 'hidden',
                  height: '100%',
                  p: { xs: 2.5, md: 5 },
                  border: '1px solid rgba(0, 150, 209, 0.16)',
                  borderRadius: { xs: 3, md: 4 },
                  bgcolor: '#fff',
                  backgroundImage: [
                    'radial-gradient(circle at 12% 18%, rgba(0, 150, 209, 0.075), transparent 24%)',
                    'radial-gradient(circle at 86% 10%, rgba(140, 198, 63, 0.06), transparent 22%)',
                    'linear-gradient(135deg, rgba(0, 150, 209, 0.035) 0 1px, transparent 1px 12px)',
                    'linear-gradient(0deg, rgba(255,255,255,0.94), rgba(255,255,255,0.94))',
                  ].join(', '),
                  boxShadow: '0 24px 70px rgba(16, 32, 42, 0.08), inset 0 1px 0 rgba(255,255,255,0.96)',
                } }
              >
          <SectionHeading
            eyebrow="FAQ"
            title={
              <>
                <Box component="span" sx={ { display: 'block' } }>
                  궁금증을 해결해드립니다!
                </Box>
              </>
            }
            description="FAQ는 보조 정보가 아니라 사용자가 전화를 걸기 전 불확실성을 줄이는 핵심 전환 영역입니다."
          />
          <Stack
            spacing={ 1.6 }
            divider={ <Divider sx={ { borderColor: 'rgba(0, 150, 209, 0.16)' } } /> }
            sx={ {
              position: 'relative',
              zIndex: 1,
            } }
          >
            { faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <Box
                  key={ faq.question }
                  sx={ {
                    border: '1px solid',
                    borderColor: isOpen ? 'rgba(0, 150, 209, 0.52)' : 'rgba(0, 150, 209, 0.22)',
                    borderRadius: 2,
                    bgcolor: 'rgba(255,255,255,0.86)',
                    backgroundImage: 'linear-gradient(180deg, rgba(255,255,255,0.98), rgba(247, 251, 253, 0.88))',
                    boxShadow: isOpen
                      ? '0 16px 34px rgba(0, 121, 170, 0.16), inset 0 1px 0 rgba(255,255,255,0.96)'
                      : '0 8px 22px rgba(16, 32, 42, 0.075), inset 0 1px 0 rgba(255,255,255,0.94)',
                    transition: 'border-color 160ms ease, box-shadow 160ms ease, transform 160ms ease',
                    '&:hover': {
                      borderColor: 'rgba(0, 150, 209, 0.44)',
                      boxShadow: '0 14px 30px rgba(0, 121, 170, 0.14), inset 0 1px 0 rgba(255,255,255,0.98)',
                      transform: 'translateY(-1px)',
                    },
                  } }
                >
                  <Button
                    fullWidth
                    onClick={ () => setOpenFaq(isOpen ? -1 : index) }
                    endIcon={
                      <KeyboardArrowDownIcon
                        sx={ {
                          transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                          color: isOpen ? 'primary.main' : 'text.secondary',
                          transition: 'transform 160ms ease',
                        } }
                      />
                    }
                    sx={ {
                      justifyContent: 'space-between',
                      py: 2.25,
                      px: { xs: 2, md: 2.8 },
                      color: isOpen ? 'primary.dark' : 'text.primary',
                      fontSize: { xs: 17, md: 20 },
                      borderRadius: 2,
                      '&:hover': {
                        bgcolor: 'rgba(0, 150, 209, 0.05)',
                      },
                    } }
                  >
                    { faq.question }
                  </Button>
                  <Box
                    sx={ {
                      display: isOpen ? 'block' : 'none',
                      px: { xs: 2, md: 2.8 },
                      pb: 3,
                      maxWidth: 780,
                    } }
                  >
                    <Typography color="text.secondary">{ faq.answer }</Typography>
                  </Box>
                </Box>
              );
            }) }
          </Stack>
              </Box>
            </Grid>
            <Grid size={ { xs: 12, md: 6 } }>
              <Box
                id="support-map"
                sx={ {
                  position: 'relative',
                  overflow: 'hidden',
                  height: '100%',
                  minHeight: { xs: 420, md: 620 },
                  borderRadius: { xs: 3, md: 4 },
                  border: '1px solid rgba(0, 93, 155, 0.14)',
                  bgcolor: '#fff',
                  boxShadow: '0 24px 70px rgba(16, 32, 42, 0.09)',
                  display: 'block',
                  color: 'inherit',
                  scrollMarginTop: { xs: 88, md: 110 },
                  transition: 'transform 220ms ease, box-shadow 220ms ease',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: '0 30px 80px rgba(0, 93, 155, 0.16)',
                  },
                  '&:hover .supportMapVisual': {
                    transform: 'scale(1.045)',
                    filter: 'saturate(1.08)',
                  },
                  '&:hover .supportMapShade': {
                    opacity: 0.1,
                  },
                  '&:hover .supportMapPin': {
                    transform: 'translate(-50%, -54%)',
                  },
                } }
              >
                <Box
                  ref={ naverMapRef }
                  sx={ {
                    position: 'absolute',
                    inset: 0,
                    zIndex: isNaverMapReady ? 2 : 0,
                    opacity: isNaverMapReady ? 1 : 0,
                    transition: 'opacity 220ms ease',
                  } }
                />
                <Box
                  className="supportMapVisual"
                  sx={ {
                    position: 'absolute',
                    inset: 0,
                    opacity: isNaverMapReady ? 0 : 1,
                    transition: 'transform 420ms cubic-bezier(0.22, 1, 0.36, 1), filter 220ms ease',
                    backgroundColor: '#EAF7FC',
                    backgroundImage: [
                      'linear-gradient(90deg, rgba(0,93,155,0.08) 1px, transparent 1px)',
                      'linear-gradient(0deg, rgba(0,93,155,0.08) 1px, transparent 1px)',
                      'linear-gradient(28deg, transparent 0 44%, rgba(0,150,209,0.30) 44% 46%, transparent 46% 100%)',
                      'linear-gradient(118deg, transparent 0 54%, rgba(140,198,63,0.34) 54% 56%, transparent 56% 100%)',
                      'linear-gradient(158deg, transparent 0 39%, rgba(245,166,35,0.28) 39% 41%, transparent 41% 100%)',
                      'radial-gradient(circle at 54% 44%, rgba(0,150,209,0.18), transparent 21%)',
                      'linear-gradient(135deg, #F8FCFE 0%, #EAF7FC 48%, #F1FAE8 100%)',
                    ].join(', '),
                    backgroundSize: '58px 58px, 58px 58px, auto, auto, auto, auto, auto',
                  } }
                />
                <Box
                  id="support-map-shade"
                  className="supportMapShade"
                  sx={ {
                    position: 'absolute',
                    inset: 0,
                    opacity: isNaverMapReady ? 0 : 0.22,
                    transition: 'opacity 220ms ease',
                    background: 'linear-gradient(180deg, rgba(255,255,255,0.12) 0%, rgba(16,32,42,0.10) 100%)',
                  } }
                />
                <Box
                  className="supportMapPin"
                  sx={ {
                    position: 'absolute',
                    left: '58%',
                    top: '52%',
                    transform: 'translate(-50%, -50%)',
                    width: 82,
                    height: 82,
                    borderRadius: '50%',
                    bgcolor: 'rgba(0,150,209,0.16)',
                    display: 'grid',
                    placeItems: 'center',
                    boxShadow: '0 0 0 20px rgba(0,150,209,0.08), 0 18px 34px rgba(0,93,155,0.18)',
                    transition: 'transform 220ms ease',
                    opacity: isNaverMapReady ? 0 : 1,
                    pointerEvents: 'none',
                  } }
                >
                  <LocationOnOutlinedIcon sx={ { color: 'primary.main', fontSize: 46 } } />
                </Box>
                <Typography
                  sx={ {
                    position: 'absolute',
                    right: 18,
                    top: 18,
                    px: 1.4,
                    py: 0.8,
                    borderRadius: '999px',
                    bgcolor: 'rgba(255,255,255,0.92)',
                    border: '1px solid rgba(0,93,155,0.18)',
                    color: 'primary.dark',
                    fontSize: 13,
                    fontWeight: 950,
                    zIndex: 3,
                  } }
                >
                  { isNaverMapReady ? '네이버지도' : '네이버지도 미리보기' }
                </Typography>
                { !isNaverMapReady ? (
                  <Box
                    sx={ {
                      position: 'absolute',
                      left: { xs: 18, md: 22 },
                      bottom: { xs: 18, md: 22 },
                      zIndex: 3,
                      maxWidth: { xs: 'calc(100% - 260px)', sm: 260 },
                      p: 1.4,
                      borderRadius: '12px',
                      bgcolor: 'rgba(255,255,255,0.94)',
                      border: '1px solid rgba(0,93,155,0.18)',
                      boxShadow: '0 12px 26px rgba(0,93,155,0.14)',
                    } }
                  >
                    <Typography sx={ { color: 'primary.dark', fontSize: 12, fontWeight: 950, lineHeight: 1.4 } }>
                      { naverMapStatus === 'missing-key'
                        ? '지도 API 키가 필요합니다.'
                        : naverMapStatus === 'error'
                          ? '지도 로딩 실패: API 활성화 또는 Web 서비스 URL을 확인하세요.'
                          : '네이버지도 로딩 중입니다.' }
                    </Typography>
                  </Box>
                ) : null }
                <Box
                  sx={ {
                    position: 'absolute',
                    right: { xs: 18, md: 22 },
                    bottom: { xs: 18, md: 22 },
                    zIndex: 3,
                    width: { xs: 210, sm: 230 },
                    p: 1.6,
                    borderRadius: '14px',
                    bgcolor: 'rgba(255,255,255,0.94)',
                    border: '1px solid rgba(0,93,155,0.18)',
                    boxShadow: '0 14px 30px rgba(0,93,155,0.16)',
                    backdropFilter: 'blur(8px)',
                  } }
                >
                  <Typography sx={ { color: 'primary.dark', fontSize: 13, fontWeight: 950, mb: 1 } }>
                    진료시간
                  </Typography>
                  <Stack spacing={ 0.7 }>
                    { [
                      ['평일', '08:00 - 17:00'],
                      ['토요일', '08:00 - 12:00'],
                      ['점심시간', '12:00 - 13:00'],
                    ].map(([label, time]) => (
                      <Stack
                        key={ label }
                        direction="row"
                        alignItems="center"
                        justifyContent="space-between"
                        sx={ {
                          gap: 1.2,
                          py: 0.35,
                          borderBottom: label === '점심시간' ? 0 : '1px solid rgba(0,93,155,0.10)',
                        } }
                      >
                        <Typography sx={ { color: 'text.secondary', fontSize: 12, fontWeight: 900 } }>
                          { label }
                        </Typography>
                        <Typography sx={ { color: 'text.primary', fontSize: 13, fontWeight: 950 } }>
                          { time }
                        </Typography>
                      </Stack>
                    )) }
                  </Stack>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>

        <Box
          component="footer"
          className="footer"
          id="footer"
          sx={ {
            position: 'relative',
            bgcolor: '#343A38',
            color: '#E9F0EC',
            py: { xs: 5, md: 4 },
          } }
        >
          <Box id="contact" sx={ { position: 'absolute', top: 0, left: 0, width: 1, height: 1 } } />
          <Container className="inner" maxWidth="xl" sx={ { maxWidth: '1400px !important' } }>
            <Box
              className="fBanner only_pc"
              sx={ {
                display: { xs: 'none', md: 'grid' },
                gridTemplateColumns: 'repeat(6, minmax(0, 1fr))',
                gap: 2.8,
                alignItems: 'center',
                pb: 3,
                borderBottom: '1px solid rgba(255,255,255,0.18)',
              } }
            >
              { footerCertifications.map(([title, caption, mark, color]) => (
                <Stack key={ title } component="dl" direction="row" spacing={ 1.6 } alignItems="center" sx={ { m: 0, minWidth: 0 } }>
                  <Box component="dt" sx={ { m: 0, flexShrink: 0 } }>
                    <Box
                      component="figure"
                      sx={ {
                        m: 0,
                        width: 50,
                        height: 50,
                        borderRadius: '50%',
                        bgcolor: color,
                        color: '#fff',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: 12,
                        fontWeight: 950,
                        boxShadow: 'inset 0 2px 0 rgba(255,255,255,0.30), 0 2px 8px rgba(0,0,0,0.22)',
                      } }
                    >
                      { mark }
                    </Box>
                  </Box>
                  <Box component="dd" sx={ { m: 0, minWidth: 0 } }>
                    <Typography component="h2" sx={ { fontSize: 16, fontWeight: 900, lineHeight: 1.25, color: '#fff' } }>
                      { title }
                    </Typography>
                    <Typography component="p" sx={ { mt: 0.4, fontSize: 13, color: 'rgba(233,240,236,0.74)' } }>
                      { caption }
                    </Typography>
                  </Box>
                </Stack>
              )) }
            </Box>

            <Stack
              className="fLink"
              direction={ { xs: 'column', md: 'row' } }
              spacing={ { xs: 2, md: 5 } }
              alignItems={ { xs: 'flex-start', md: 'center' } }
              sx={ { pt: { xs: 0, md: 3 }, pb: 2.4 } }
            >
              <Stack component="ul" className="fLinkMenu" direction="row" spacing={ { xs: 1.6, md: 3.2 } } sx={ { m: 0, p: 0, listStyle: 'none', flexWrap: 'wrap', rowGap: 1.2 } }>
                { footerLinks.map(([label, href]) => (
                  <Box component="li" key={ label }>
                    <Typography
                      component="a"
                      href={ href }
                      sx={ {
                        color: label === '개인정보처리방침' ? '#3BF078' : '#fff',
                        fontSize: 16,
                        fontWeight: 850,
                        textDecoration: 'none',
                        '&:hover': { color: '#8CF0B2' },
                      } }
                    >
                      { label }
                    </Typography>
                  </Box>
                )) }
              </Stack>

              <Stack component="ul" className="fLinkSns" direction="row" spacing={ 1.2 } sx={ { m: 0, p: 0, listStyle: 'none' } }>
                { footerSns.map(([label, href, color]) => (
                  <Box component="li" key={ label }>
                    <Box
                      component="a"
                      href={ href }
                      target="_blank"
                      rel="noopener"
                      title={ label }
                      sx={ {
                        width: 34,
                        height: 34,
                        borderRadius: label === 'blog' ? '8px' : '7px',
                        bgcolor: color,
                        color: label === 'Talk' ? '#3A2B00' : '#fff',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: label === 'blog' ? 11 : 20,
                        fontWeight: 950,
                        textDecoration: 'none',
                      } }
                    >
                      { label }
                    </Box>
                  </Box>
                )) }
              </Stack>
            </Stack>

            <Stack
              component="ul"
              className="fGnb"
              direction="row"
              spacing={ { xs: 1.4, md: 3 } }
              sx={ {
                m: 0,
                p: 0,
                listStyle: 'none',
                flexWrap: 'wrap',
                color: 'rgba(255,255,255,0.90)',
                fontSize: 15,
                fontWeight: 800,
              } }
            >
              { [
                ['의료법인 스마트허브병원', ''],
                ['대표:', '스마트허브'],
                ['주소:', '(16494) 경기도 수원시 팔달구 중부대로 165'],
                ['대표번호:', '1899-9114'],
                ['진료문의:', '031-431-0119'],
              ].map(([label, value]) => (
                <Stack component="li" key={ `${label}${value}` } direction="row" spacing={ 0.6 }>
                  <Typography component={ value ? 'span' : 'p' } sx={ { m: 0, fontSize: 'inherit', fontWeight: 900 } }>
                    { label }
                  </Typography>
                  { value ? (
                    <Typography component="p" sx={ { m: 0, fontSize: 'inherit', fontWeight: 850 } }>
                      { value }
                    </Typography>
                  ) : null }
                </Stack>
              )) }
            </Stack>

            <Box
              className="fBanner only_m"
              sx={ {
                display: { xs: 'grid', md: 'none' },
                gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)' },
                gap: 1.6,
                mt: 3,
                pt: 3,
                borderTop: '1px solid rgba(255,255,255,0.16)',
              } }
            >
              { footerCertifications.map(([title, caption, mark, color]) => (
                <Stack key={ title } component="dl" direction="row" spacing={ 1.4 } alignItems="center" sx={ { m: 0 } }>
                  <Box component="dt" sx={ { m: 0 } }>
                    <Box
                      component="figure"
                      sx={ {
                        m: 0,
                        width: 44,
                        height: 44,
                        borderRadius: '50%',
                        bgcolor: color,
                        color: '#fff',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: 11,
                        fontWeight: 950,
                      } }
                    >
                      { mark }
                    </Box>
                  </Box>
                  <Box component="dd" sx={ { m: 0 } }>
                    <Typography component="h2" sx={ { fontSize: 15, color: '#fff', fontWeight: 900 } }>
                      { title }
                    </Typography>
                    <Typography component="p" sx={ { mt: 0.2, fontSize: 12, color: 'rgba(233,240,236,0.72)' } }>
                      { caption }
                    </Typography>
                  </Box>
                </Stack>
              )) }
            </Box>

            <Typography className="copyright montserrat" sx={ { mt: 4, color: 'rgba(233,240,236,0.58)', fontSize: 13 } }>
              Copyright (C) 2026 SmartHub Hospital. All Rights Reserved.
            </Typography>

            <Box component="span" itemScope itemType="http://schema.org/Organization" sx={ { display: 'none' } }>
              <Box component="link" itemProp="url" href="https://www.dswhosp.co.kr/" />
              { footerSns.slice(1).map(([label, href]) => (
                <Box key={ label } component="a" itemProp="sameAs" href={ href } />
              )) }
            </Box>
          </Container>
        </Box>
      </Box>
    </Box>
  );
}

export default SmartHubHome;

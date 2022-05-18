import React from 'react';
import { useNavigate, useParams } from "react-router-dom";
import { Rating, Tabs } from '../../components';
import { ReactComponent as Heart } from './icons/icn_heart.svg';
import { ReactComponent as ChevronLeft } from './icons/icn_chevron_left_white.svg';
import { ReactComponent as Website } from './icons/ic_website.svg';
import { ReactComponent as Address } from './icons/icn_address.svg';
import { ReactComponent as Phone } from './icons/icn_phone.svg';
import { ReactComponent as Time } from './icons/icn_time.svg';
import { ReactComponent as ChevronDown } from './icons/icn_chevron_right_down.svg';
import { StyledHeader, Navigation, TopBar, BottomBar, BackIconWrapper, Name, Reviews, ReviewWrapper, Details, DetailsList, Text, Description } from './Salon.styles';
import { useDataContext } from '../../context';

const tabs = [
  { label: 'Info', value: 'info'},
  { label: 'Schema', value: 'schema'},
]

function Salon() {
  const { salon: data } = useDataContext();
  const { salonId } = useParams();
  const navigate = useNavigate();

  const salon = data?.find(s => s.id === Number(salonId));
  return (
    <div>
  <StyledHeader>
    <TopBar>
      <Navigation>
        <BackIconWrapper onClick={() => navigate('/')}>
          <ChevronLeft />
        </BackIconWrapper>
        <Heart />
      </Navigation>
    </TopBar>
    {salon &&
      <BottomBar>
        <Name>{salon.name}</Name>
        <ReviewWrapper>
          <Rating rate={salon.rating} />
          <Reviews>({salon.number_of_reviews})</Reviews>
        </ReviewWrapper>
      </BottomBar>
    }
  </StyledHeader>
  <Tabs tabs={tabs} onChange={tab => console.log(tab)} activeTab='info'/>
  {salon && <><DetailsList>
    <Details>
      <Address />
      <Text>{salon.address}</Text>
    </Details>
    <Details>
      <Time />
      <Text>Oppet till {salon.closed_at} idag</Text>
      <ChevronDown />
    </Details>
    <Details>
      <Phone />
      <Text>{salon.phone_number}</Text>
    </Details>
    {salon.url &&
      <Details>
        <Website />
        <Text>{salon.url}</Text>
      </Details>
    }
  </DetailsList>
  <Description>
    <Text>{salon.description}</Text>
  </Description>
  </>}
  </div>
  );
}

export default Salon;

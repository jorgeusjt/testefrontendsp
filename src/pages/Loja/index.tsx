import React, {useEffect, useState} from 'react';
import {Text, View, Dimensions, SafeAreaView, ScrollView} from 'react-native';
import {FocusAwareStatusBar} from '../../routes/wrapper';
import styles from './styles';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import {useNavigation} from '@react-navigation/native';
import Card from '../components/card'

import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import { Repository } from '../../store/ducks/repositories/types';
import { ApplicationState } from '../../store';

import * as RepositoriesActions from '../../store/ducks/repositories/actions';

const SLIDER_WIDTH = Dimensions.get('window').width;
const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7);


interface StateProps {
  repositories: Repository[]
}

interface DispatchProps {
  loadRequest(): void
}

type Props = StateProps & DispatchProps

const Loja: React.FC<Props> = (props) => {
  const navigation = useNavigation();
  const [activeSlide, setActiveSlide] = useState(0);
  const { loadRequest } = props;
  const { repositories } = props;
  
  useEffect(()=> {
    loadRequest();
  },[])

  function handleNavigateToPagamentoPage(item: any) {
    navigation.navigate('Pagamento', {curso: item});
  }

  function _renderItem(value: any) {
    return(
        <Card 
        value= {value} 
        navigate={navigation.navigate}/>
        );
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <FocusAwareStatusBar
          translucent
          backgroundColor="#FF8686"
          barStyle="light-content"
        />

        <Text style={styles.title}>Conheça nossos cursos:</Text>

        <Carousel
          data={repositories}
          renderItem={_renderItem}
          sliderWidth={SLIDER_WIDTH}
          itemWidth={ITEM_WIDTH}
          onSnapToItem={(index: number) => setActiveSlide(index)}
          containerCustomStyle={{marginBottom: 30}}
          inactiveSlideScale={0.8}
          inactiveSlideOpacity={1}
        />

        <Pagination
          dotsLength={repositories.length}
          activeDotIndex={activeSlide}
          containerStyle={{backgroundColor: 'white'}}
          dotStyle={styles.dot}
          dotContainerStyle={{marginHorizontal: 4}}
          inactiveDotStyle={styles.inactiveDot}
          inactiveDotOpacity={1}
          inactiveDotScale={1}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

const mapStateToProps = (state: ApplicationState) => ({
  repositories: state.repositories.data,
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(RepositoriesActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Loja);

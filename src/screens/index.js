import React, { PureComponent } from 'react';
import SearchContainer from './search';
import FeedbackContainer from './feedback';
import axios from 'axios';
import { Urls } from './../constants';

class AppScreen extends PureComponent {
  categoriesHashMap = {};
  masterList = [];
  constructor(props) {
    super(props);
    this.state = this.getInitialState();
  }
  getInitialState = () => ({
    name: '',
    gender: '',
    isLoading: false,
    masterList: [],
    selectedCategories: [],
    selectedFeedback: []
  });

  shouldSearchBarBeShown = () => {
    if (!this.state.name && !this.state.gender) {
      return false;
      //return true;
    } else {
      return false;
    }
  };

  fetchFeedbacks = (name, gender) => {
    const params = {
      name,
      gender
    };

    axios
      .get(Urls.FEEDBACK, { params })
      .then(response => {
        this.updateState(() => ({ isLoading: false }));
        const { data } = response;
        this.masterList = data;
      })
      .catch(console.error);
  };

  updateState = callback => {
    this.setState(callback);
  };

  selectFeedback = selectedCategories => {
    const feedbackMap = {};

    selectedCategories.forEach(selectedCategory => {
      const feedbackObject = {};
      feedbackObject.value = selectedCategory.value;
      feedbackObject.text = selectedCategory.text;
      feedbackMap[selectedCategory.value] = feedbackObject;
    });

    console.log(feedbackMap);
    const response = Object.keys(feedbackMap).reduce((accum, current) => {
      const feedbacks = this.masterList[current];
      const feedbackObject = feedbackMap[current];
      feedbackObject.feedback = feedbacks;
      accum.push(feedbackObject);
      return accum;
    }, []);

    return response;
  };

  onCategorySelect = category => {
    const { selectedCategories } = this.state;
    let updatedArray = [];
    if (this.categoriesHashMap[category.value]) {
      updatedArray = selectedCategories.filter(c => c.value !== category.value);
      this.categoriesHashMap[category.value] = undefined;
    } else {
      this.categoriesHashMap[category.value] = category.value;
      updatedArray = [category, ...selectedCategories];
    }

    const selectedFeedback = this.selectFeedback(updatedArray);
    this.setState({
      selectedCategories: updatedArray,
      selectedFeedback
    });
  };

  render() {
    return (
      <div>
        {this.shouldSearchBarBeShown() ? (
          <SearchContainer
            updateState={this.updateState}
            fetchFeedbacks={this.fetchFeedbacks}
          />
        ) : (
          <FeedbackContainer
            selectedCategories={this.state.selectedCategories}
            categoriesHashMap={this.categoriesHashMap}
            onCategorySelect={this.onCategorySelect}
            loading={this.state.isLoading}
            selectedFeedback={this.state.selectedFeedback}
            name={this.state.name}
          />
        )}
      </div>
    );
  }
}

export default AppScreen;

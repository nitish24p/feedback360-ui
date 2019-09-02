import React, { PureComponent } from 'react';
import {
  ParentContainer,
  FlexCenteredContainer,
  Heading,
  FormContainer,
  Input,
  Button,
  Paragraph,
  Loader,
  Container,
  Card
} from './../../components/styledcomponents';
import { categories } from './categories';
import Select from './../../components/select';
import styles from './styles.module.css';

class Feedback extends PureComponent {
  formSubmit = event => {
    event.preventDefault();
    const { target } = event;
  };
  renderHeader = () => {
    return (
      <div className={styles.headerWrapper}>{this.renderHeaderContent()}</div>
    );
  };

  getMoreFeedback = () => {
    const { name, gender } = this.props;
    this.props.updateState(() => ({
      isLoading: true
    }));
    this.props.fetchFeedbacks(name, gender);
  };

  renderHeaderContent = () => {
    if (this.props.loading) {
      return (
        <div>
          <div className={styles.headerTextWrapper}>
            <Heading margin="0px">
              Hey {this.props.name}, preparing your feedback
            </Heading>
          </div>
          <Loader fixbottom />
        </div>
      );
    } else {
      return (
        <div>
          <div className={styles.headerTextWrapper}>
            <Heading margin="0px">
              Done!!, your feedback is below <span role="img">😂</span>
            </Heading>
            <Button
              fontSize="16px"
              size="regular"
              onClick={this.getMoreFeedback}
            >
              Get More Feedback
            </Button>
          </div>
        </div>
      );
    }
  };

  onLinkClick = e => {
    const value = e.target.getAttribute('data-value');
    const text = e.target.getAttribute('data-text');
    this.props.onCategorySelect({ value, text });
  };

  isListItemActive = category => {
    if (this.props.categoriesHashMap[category.value]) {
      return true;
    }
    return false;
  };

  renderTagsContainer = () => {
    if (this.props.loading) {
      return null;
    }
    return (
      <Container className={styles.tagContainer}>
        <Card>
          <span>Select Categories Below</span>
          <ul className={styles.list}>
            {categories.map((category, index) => {
              return (
                <li
                  key={index}
                  data-value={category.value}
                  data-text={category.text}
                  onClick={this.onLinkClick}
                  className={
                    this.isListItemActive(category) ? styles.listActive : ''
                  }
                >
                  {category.text}
                </li>
              );
            })}
          </ul>
        </Card>
      </Container>
    );
  };

  renderFeedbackCards = () => {
    if (this.props.loading) {
      return null;
    }
    return (
      <div>
        {this.props.selectedFeedback.map((feedbackDetail, index) => {
          return (
            <Container
              className={styles.feedbackContainer}
              key={feedbackDetail.value}
            >
              <Card>
                <Heading margin="0px">{feedbackDetail.text}</Heading>
                <ul className={styles.list}>
                  {feedbackDetail.feedback.map((fb, index) => (
                    <li key={index}>{fb}</li>
                  ))}
                </ul>
              </Card>
            </Container>
          );
        })}
      </div>
    );
  };

  render() {
    return (
      <ParentContainer>
        {this.renderHeader()}
        {this.renderTagsContainer()}
        {this.renderFeedbackCards()}
      </ParentContainer>
    );
  }
}

export default Feedback;

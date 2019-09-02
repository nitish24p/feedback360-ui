import React, { PureComponent } from 'react';
import {
  ParentContainer,
  FlexCenteredContainer,
  Heading,
  FormContainer,
  Input,
  Button
} from './../../components/styledcomponents';
import Select from './../../components/select';

class SearchScreen extends PureComponent {
  formSubmit = event => {
    event.preventDefault();
    const { target } = event;
    const name = target.name.value;
    const gender = target.gender.value;

    this.props.updateState(prevState => {
      return {
        isLoading: true,
        name,
        gender
      };
    });

    this.props.fetchFeedbacks(name, gender);
  };
  render() {
    return (
      <ParentContainer>
        <FlexCenteredContainer>
          <div>
            <Heading>Make Feedback Great Again</Heading>
            <FormContainer onSubmit={this.formSubmit}>
              <Input
                required
                type="text"
                placeholder="Enter Name"
                name="name"
                autoComplete={0}
              />
              <Select name="gender" defaultValue="" required>
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </Select>
              <Button type="submit">Submit</Button>
            </FormContainer>
          </div>
        </FlexCenteredContainer>
      </ParentContainer>
    );
  }
}

export default SearchScreen;

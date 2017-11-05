import {TEXT, CARD_BACKGROUND, INFO, ERROR, APP_BACKGROUND} from '../define';

const InputStyles = {
  containerStyle: {
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    height: 40,
  },
  labelStyle: {
    fontSize: 18,
    paddingLeft: 20,
    flex: 1,
  },
  inputStyle: {
    flex: 2,
    fontSize: 18,
    paddingHorizontal: 5,
    lineHeight: 23,
    color: '#000',
  },
};

const ButtonStyles = {
  buttonStyle: {
    alignSelf: 'stretch',
    backgroundColor: INFO,
    borderRadius: 5,
    marginLeft: 5,
    marginRight: 5,
    elevation: 3,
  },
  textStyle: {
    alignSelf: 'center',
    color: CARD_BACKGROUND,
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10,
  },
};

const CardStyles = {
  containerStyle: {
    // Shadow
    shadowColor: '#000',
    shadowOffset: { width: -1, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 3, // Map with border-radius
    elevation: 1,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10,
    backgroundColor: CARD_BACKGROUND,
  },
};

const CardSectionStyles = {
  containerStyle: {
    borderBottomWidth: 1,
    padding: 5,
    justifyContent: 'flex-start',
    flexDirection: 'row',
    borderColor: APP_BACKGROUND,
    position: 'relative',
  },
};

const HeaderStyles = {
  viewStyle: {
    backgroundColor: '#F8F8F8',
    justifyContent: 'center', // Vertical positioning (Move elements up & down
    alignItems: 'center', // Horizontal positioning (right & left)
    height: 60,
    paddingTop: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 }, // Size of the shadow
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative',
  },
  textStyle: {
    fontSize: 20,
  },
};

const SpinnerStyles = {
  spinnerStyles: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
};

export {
  InputStyles,
  ButtonStyles,
  CardStyles,
  CardSectionStyles,
  HeaderStyles,
  SpinnerStyles,
};

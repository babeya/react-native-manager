const InputStyles = {
  containerStyle: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  },
  labelStyle: {
    fontSize: 16,
    margin: 5,
  },
  inputStyle: {
    fontSize: 16,
    margin: 5,
  },
};

const ButtonStyles = {
  buttonStyle: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#007aff',
    marginLeft: 5,
    marginRight: 5,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyle: {
    color: '#007aff',
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10,
    flex: 1,
  },
};

const CardStyles = {
  containerStyle: {
    // Border
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    // Shadow
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2, // Map with border-radius
    elevation: 1,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10,
  },
};

const CardSectionStyles = {
  containerStyle: {
    borderBottomWidth: 1,
    padding: 5,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    borderColor: '#ddd',
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

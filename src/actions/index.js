export const REQUEST_API = 'REQUEST_API';
export const GET_PICTURE = 'GET_PICTURE';

export const requestAPI = () => ({ type: REQUEST_API });

export const getPicture = (data) => ({ type: GET_PICTURE, data });

export const fetchAPI = () => async (dispatch) => {
  // Desenvolva aqui o código da action assíncrona
  try {
    dispatch(requestAPI())
    const picture = await fetch('https://aws.random.cat/meow');
    const data = await picture.json();
    dispatch(getPicture(data));
  } catch (error) {
    console.log(error);
  }
}

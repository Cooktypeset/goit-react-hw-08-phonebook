import { Oval } from 'react-loader-spinner';
import css from './Loader.module.css';

// function counterReducer(state = 0, action) {
//   switch (action.type) {
//     case 'INCREMENT':
//       return state + 1;
//     case 'DECREMENT':
//       return state - 1;
//     default:
//       return state;
//   }
// }
export const Loader = ({className=css.loader}) => {

    return (
        <div className={className}>
            <Oval
                height={80}
                width={80}
                color="#3fb574"
                wrapperStyle={{}}
                wrapperClass=''
                visible={true}
                ariaLabel='oval-loading'
                secondaryColor='#3fb574'
                strokeWidth={5}
                strokeWidthSecondary={5}/>

            
        </div>
    );
};
import { useSelector, useDispatch } from 'react-redux';
import { selectNameFilter, changeFilter } from '../../redux/filtersSlice';
import styles from './SearchBox.module.css';

const SearchBox = () => {
    const dispatch = useDispatch();
    const filter = useSelector(selectNameFilter);

    const handleFilterChange = (event) => {
        dispatch(changeFilter(event.target.value));
    };

    return (
        <div className={styles.searchBox}>
            <label>
                Find contacts by name
                <input className={styles.input}
                    type="text"
                    value={filter}
                    onChange={handleFilterChange}
                />
            </label>
        </div>
    );
};

export default SearchBox;

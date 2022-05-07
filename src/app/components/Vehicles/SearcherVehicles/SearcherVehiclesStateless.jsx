import PropTypes from 'prop-types'

import SearchIcon from '@mui/icons-material/Search'
import { InputAdornment, TextField } from '@mui/material'

const SearcherVehiclesStateless = ({ handleChange, handleSubmit }) => {
  return (
    <form
      className="p-3"
      onSubmit={ handleSubmit }
    >
      <TextField
        variant="outlined"
        size="small"
        placeholder="Vehicle Searcher by Driver"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          )
        }}
        onChange={ handleChange }
      />
    </form>
  )
}

SearcherVehiclesStateless.propTypes = {
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired
}

export default SearcherVehiclesStateless
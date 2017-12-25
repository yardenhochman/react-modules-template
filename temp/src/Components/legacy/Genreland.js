import React from 'react';

const Genreland = ({selectedMusic , handleGenreChoice}) => (
    <form>
      <label>
        Pick your favorite genre:
        <select value={selectedMusic} onChange={handleGenreChoice}>
          <option value="0"></option>
          <option value="1">Rock</option>
          <option value="2">Alternative</option>
          <option value="3">RnB</option>
          <option value="4">Hip Hop</option>
          <option value="5">Pop</option>
          <option value="6">Country</option>
          <option value="7">EDM</option>
          <option value="8">Christian/Gospel</option>
          <option value="9">Seasonal</option>
          <option value="10">Jazz</option>
          <option value="11">Classical</option>
          <option value="12">Heavy Metal</option>
          <option value="13">Blues</option>
          <option value="14">Oldies</option>
          <option value="15">Folk</option>
          <option value="16">Soul</option>
          <option value="17">Punk Rock</option>
          <option value="18">Grunge</option>
          <option value="19">Reggae</option>
          <option value="20">Industrial</option>
          <option value="21">Opera</option>
          <option value="22">Bluegrass</option>
          <option value="23">Disco</option>
          
        </select>
      </label>
    </form>
)
export default Genreland;


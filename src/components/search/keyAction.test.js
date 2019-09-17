import { expect } from 'chai';
import { saveSearch } from './keyAction';
import localJSONStorage from './../../utils/localJSONStorage';

describe('Search KeyAction', () => {
  const storage = {};

  beforeEach(() => {
    window.localStorage.getItem = key => (storage[key]);
    window.localStorage.setItem = (key, item) => { storage[key] = item; };
  });

  it('saves the last 3 searches without duplicates', () => {
    const testValues = [
      { id: '811299173602533P', searchTerm: '811299173602533P' },
      { id: '947273526752682P', searchTerm: '947273526752682P' },
      { id: '', searchTerm: '' },
      { id: '382923358293526L   ', searchTerm: '382923358293526L   ' },
      { id: '947273526752682L   ', searchTerm: '947273526752682P' },
    ];

    const expectedOutcome = [
      { id: '947273526752682L   ', searchTerm: '947273526752682P' },
      { id: '382923358293526L   ', searchTerm: '382923358293526P' },
      { id: '811299173602533P', searchTerm: '811299173602533P' },
    ];

    testValues.forEach((searchObj) => {
      saveSearch(searchObj.searchTerm, searchObj.id);
    });
    expect(localJSONStorage.get('searches')).to.eql(expectedOutcome);
  });
});

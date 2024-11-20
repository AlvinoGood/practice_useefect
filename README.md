In this project I go to present the 3 examples about the hook useeffect(). 

1. Effect without dependencies (runs on every render)
Description: If you don't pass a second argument (the dependencies array), the effect will run on every render of the component, both during mounting and updates.
Common use: Not recommended unless you need to run the effect constantly in specific cases.


2. Effect with an empty array (runs only on mount)
Description: If you pass an empty array [] as the second argument, the effect will run only once, when the component mounts (similar to componentDidMount in class components).
Common use:
- API calls.
- Data initialization.
- Initial setup (like adding listeners).

3. Effect with dependencies (runs when dependencies change)
Description: If you pass an array with dependencies [dep1, dep2], the effect will run:
When the component mounts.
Every time one of the dependencies in the array changes.
Common use:
- Responding to changes in specific props or states.
- Synchronizing derived values.
- Updating conditional side effects.

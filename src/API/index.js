const API = `https://fsa-puppy-bowl.herokuapp.com/api/2410-FTB-ET-WEB-FT`;

export const fetchAllPlayers = async () => {
  try {
    const response = await fetch(API + "/players");
    const json = await response.json();

    return json.data.players;
  } catch (err) {
    console.error("Uh oh, trouble fetching players!", err);
    return [];
  }
};

export const fetchSinglePlayer = async (id) => {
  try {
    const response = await fetch(`${API}/players/${id}`);
    const json = await response.json();

    return json.data.player;
  } catch (error) {
    console.error("error fetching player details", error);
  }
};

export const addNewPlayer = async (newPuppy) => {
  try {
    const response = await fetch(API + "/players", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newPuppy),
    });

    const json = await response.json();

    if (json.error) {
      throw new Error(json.error.message);
    }
  } catch (err) {
    console.error("Oops, something went wrong with adding that player!", err);
  }
};

export const removePlayer = async (id) => {
  try {
    const response = await fetch(`${API}/players/${id}`, {
      method: "DELETE",
    });
    if (!response.ok) {
      throw new Error("failed to remove player");
    }
    const json = await response.json();
    return json;
  } catch (error) {
    console.error("error reomving player");
    return null;
  }
};

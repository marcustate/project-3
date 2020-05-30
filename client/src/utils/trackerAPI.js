import axios from "axios";

export default {
    getGoals: function() {
        return axios.get("/tracker/goals");
    },

    getGoal: function(id) {
        return axios.get("/tracker/goals/" + id);
    },

    deleteGoal: function(id) {
        return axios.post("/tracker/goals" + id);
    },

    addGoal: function(goalData) {
        return axios.post("/tracker", goalData)
    }
};
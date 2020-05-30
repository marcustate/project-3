import axios from "axios";

export default {
    getGoals: function() {
        return axios.get("/api/goals/");
    },

    getGoal: function(id) {
        return axios.get("/api/goals/" + id);
    },

    deleteGoal: function(id) {
        return axios.post("/api/goals/" + id);
    },

    addGoal: function(goalData) {
        return axios.post("/api/goals", goalData)
    }
};
import axios from "axios";

export default {
    getGoals: function(query) {
        return axios.get("/api/goals/");
    },

    getGoal: function(id) {
        return axios.get("/api/goals/" + id);
    },

    deleteGoal: function(id) {
        return axios.delete("/api/goals/" + id);
    },

    saveGoal: function(data) {
        return axios.post("/api/goals", data)
    }
};
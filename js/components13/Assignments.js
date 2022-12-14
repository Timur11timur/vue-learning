import AssignmentCreate from "./AssignmentCreate.js";
import AssignmentList from "./AssignmentList.js";

export default {
    components: {
        AssignmentCreate,
        AssignmentList
    },

    template: `
        <section class="space-y-6">
                <assignment-list :assignments="filters.inProgress" title="In Progress"></assignment-list>
                
                <assignment-list :assignments="filters.completed" title="Completed"></assignment-list>
                
                <assignment-create @add="add"></assignment-create>
        </section>
    `,

    data() {
        return {
            assignments: []
        }
    },

    computed: {
        filters() {
            return {
                inProgress: this.assignments.filter(assignment => !assignment.complete),
                completed: this.assignments.filter(assignment => assignment.complete)
            }
        }
    },

    created() {
        fetch('http://localhost:3001/assignments')
            .then(response => response.json())
            .then(assignments => {
                this.assignments = assignments;
            })
    },

    methods: {
        add(name) {
            if (name !== '') {
                this.assignments.push({
                    name: name,
                    complete: false,
                    id: this.assignments.length + 1
                })
                this.newAssignment = '';
            }
        }
    }
}
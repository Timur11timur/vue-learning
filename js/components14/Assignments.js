import AssignmentCreate from "./AssignmentCreate.js";
import AssignmentList from "./AssignmentList.js";

export default {
    components: {
        AssignmentCreate,
        AssignmentList
    },

    template: `
        <section class="flex gap-8">
                <assignment-list :assignments="filters.inProgress" title="In Progress">
                    <assignment-create @add="add"></assignment-create>
                </assignment-list>
                
                <assignment-list 
                    v-show="showCompleted"
                    :assignments="filters.completed" 
                    title="Completed" 
                    can-toggle
                    @toggle="showCompleted = !showCompleted"
                ></assignment-list>
        </section>
    `,

    data() {
        return {
            assignments: [],
            showCompleted: true
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
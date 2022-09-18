import Assignments from "./Assignments.js";
import Panel from "./Panel.js";

export default {
    components: {
        assignments: Assignments,
        Panel
    },

    template: `
        <div class="grid gap-8">
            <assignments />
            
            <panel>
                This panel without heading
            </panel>
            
            <panel>
                <template v-slot:heading>
                    My heading
                </template>
                My body
            </panel>
            
            <panel>
                <template v-slot:heading>
                    My heading
                </template>
                <template v-slot:default>
                    My body with v-slot
                </template>
                <template v-slot:footer>
                    My footer
                </template>
            </panel>
            
            <panel theme="light">
                <template v-slot:heading>
                    My heading
                </template>
                <template v-slot:default>
                    My body with v-slot
                </template>
                <template v-slot:footer>
                    My footer
                </template>
            </panel>
        </div>
    `
}
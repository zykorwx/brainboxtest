<template>
    <div class="border rounded">
        <accordion-item title="I forgot my password. What do I do?">
            <template v-slot:content>
                <div class="p-4">
                    Visit the <a href="#" class="font-medium text-[#323ff8] dark:text-blue-500 hover:underline">forgot password</a> link on the BrainBox AI Test login page.
                </div>
            </template>
        </accordion-item>
        <accordion-item title="How to I change my email address?">
            <template v-slot:content>
                <ol class="p-4 space-y-3 list-decimal list-inside">
                    <li>Log in with your old email address.</li>
                    <li>Click Login &amp; profile on the left hand side of the page.</li>
                    <li>Type over your old email address (twice - also in the Confirm email address field).</li>
                    <li>Save your changes by clicking the Save changes button at the bottom of the Edit profile page.</li>
                    <li>Complete the email validation process to continue using your myTI account.</li>
                </ol>
            </template>
        </accordion-item>
        <accordion-item title="What is the BrainBox AI Test newsletter?">
            <template v-slot:content>
                <div class="p-4">
                    The BrainBox AI Test newsletter is a weekly newsletter that will keep you up to date on TI's latest products, applications and
                    tools. The newsletter is only emailed to subscribers who have opted to receive the newsletter.
                </div>
            </template>
        </accordion-item>
    </div>
</template>

<script>
import AccordionItem from '@/components/common/AccordionItem.vue'
export default {
    name: 'accordion-layout',
    components: {
        AccordionItem,
    }
}
</script>

<style scoped>

</style>

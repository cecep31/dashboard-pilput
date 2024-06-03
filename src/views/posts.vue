<script setup lang="ts">
import { ref, onMounted } from 'vue'
import type { PostInterface } from '@/types';
import Days from 'dayjs'

const posts = ref<PostInterface[]>([])

onMounted(async () => {
    try {
        const response = await fetch("https://enchanting-charm-production.up.railway.app/posts")

        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        const data = await response.json()
        posts.value = data.data

    } catch (error) {

    }

})
</script>

<template>
    <div class="px-5 bg-white shadow-md py-4 rounded-lg">
        <div class="text-xl font-semibold my-3">Posts</div>
        <div>
            <Button variant="secondary" class="border">
                Add new post
            </Button>
        </div>
        <table>

            <thead>
                <tr>
                    <td>Author</td>
                    <th>Title</th>
                    <th>Body</th>
                    <th>Date</th>
                </tr>
            </thead>
            <tbody>

                <tr v-for="post in posts" :key="post.id">
                    <td>
                        <div class="flex gap-2 items-center">
                            <Avatar>
                                <AvatarImage src={getProfilePicture(post.creator?.image)} width={5} height={5}
                                    alt="Avatar"></AvatarImage>
                                {{ post.creator?.email }}
                                <AvatarFallback>
                                    {{ post.creator?.first_name[0] }}
                                </AvatarFallback>
                            </Avatar>
                            <div class="font-semibold">
                                {{ post.creator?.first_name }} {{ post.creator?.last_name }}
                            </div>
                        </div>
                    </td>
                    <td class="font-semibold">
                        <div class="max-w-96 overflow-auto">{{ post.title }}</div>
                    </td>
                    <td>
                        {{ post.body.replace(/<.*?>/g, "").length > 5
                            ? post.body.replace(/<.*?>/g, "").substring(0, 70) + "..."
                            : post.body.replace(/<.*?>/g, "") }}
                    </td>

                    <td>
                        {{ Days(post.created_at).format("DD MMM YYYY") }}
                    </td>
                </tr>
            </tbody>
        </Table>
    </div>
</template>
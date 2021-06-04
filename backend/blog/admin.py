from django.contrib import admin

from blog.models import Profile, Post, Tag

@admin.register(Profile)
class ProfileAdmin(admin.ModelAdmin):
    model = Profile

@admin.register(Post)
class PostAdmin(admin.ModelAdmin):
    model = Post

    list_display = (
        'id',
        'title',
        'subtitle',
        'slug',
        'published_at',
        'published',
    )
    list_filter = (
        'published',
        'published_at',
    )
    list_editable = (
        'title',
        'subtitle',
        'slug',
        'published_at',
        'published',
    )
    search_fields = (
        'title',
        'subtitle',
        'slug',
        'body',
    )
    prepopulated_fields = {
        'slug': (
            'title',
            'subtitle',
        )
    }
    date_hierarchy = 'published_at'
    save_on_top = True

@admin.register(Tag)
class TagAdmin(admin.ModelAdmin):
    model = Tag
